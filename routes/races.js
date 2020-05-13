/**
 * Races routes
 */

const express = require('express');
const router = express.Router();

const dbConnect = require('../dbconnect');

const trace = require('../trace');

/**
 * Route : /races/{:dataset}/?types=xxxx,xxxx,xxxx
 * Return the races for a given list of types
 */
router.get('/:ds', (req, res, next) => {
  
  const dbid = req.params.ds;
  const conn = dbConnect.getPool(dbid);

  where = '';

  const typeList = req.query.types || '';
  let typeIn = '';
  if (typeList !== '') {
    types = typeList.split(',');
    for (const type of types) {
      typeIn += `,'${type}'`;
    }
    where = `where ${dbid}_races.type_race in (${typeIn.slice(1)})`;
  }

  const sql = [
    `select * from ${dbid}_races`,
    where
  ].join(' ');

  trace.output(sql);
  
  conn.query(sql, function (err, result) {
    conn.end();
    if (err) throw err;
    if (result.length == 0) {
      res.sendStatus(404);
    } else {
      res.status(200).json({
        rs: result
      });
    }
  });

});

/**
 * Route : /races/{:dataset}/{:race}
 * Return a race record
 */
router.get('/:ds/:race', (req, res, next) => {

  const dbid = req.params.ds;
  const conn = dbConnect.getPool(dbid);

  const race = req.params.race || '';
  if (race === '') throw 'Required URL argument not found';

  const sql = [
    `select * from ${dbid}_races`,
    'where race = ?'
  ].join(' ');

  trace.output(sql);

  conn.query({
      sql: sql,
      values: [
        race
      ]
    },
    function (err, result) {
      conn.end();
      if (err) throw err;
      if (result.length == 0) {
        res.sendStatus(404);
      } else {
        res.status(200).json({
          rs: result
        });
      }
    }
  );

});

module.exports = router;