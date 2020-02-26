# comob-api
NodeJS Express REST API for serving Chroniques Oubliées TTRPG compendium data

## Available routes

    /dataset

Returns the list of datasets

    /types/paths/:ds
    
Returns the list of paths types for a given dataset (:ds)

    /types/abilities/:ds

Returns the list of ability types for a given dataset (:ds)

    /families/:ds

Returns the list of profile families for a given dataset (:ds)

    /profiles/:ds

Returns the list of all profiles for a given dataset (:ds)

    /profiles/:ds/?family=:family1,:family2

Returns the list of profiles for a given dataset (:ds) and the given family ids (:family1, :family2, etc...)

    /paths/:ds/?type=:type

Returns the list of paths for a given dataset (:ds) and special type (:type)

    /paths/:ds/:profile

Returns the list of paths for a given dataset (:ds) and profile (:profile)

    /abilities/:ds/?type=:type

Returns the list of abilities for a given dataset (:ds) and type (:type) such as prestige or epic

    /abilities/:ds/:path

Returns the list of abilities for a given dataset (:ds) and path (:path)
/categories/:ds
Returns the list of all main equipment categories for a given dataset (:ds)
/categories/:ds/:parent
Returns the list of sub-categories for a given dataset (:ds) and parent category (:parent)
/equipments/:ds/?profile=:profile
Returns the list of base equipment for a given dataset (:ds) and profile (:profile)
/equipments/:ds/:parent
Returns the list of all equipments for a given dataset (:ds) and parent category 

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3NDYzMTEwMTQsLTUwMDA2OTcxNywxOT
k4MzkwMDAsLTEwODgzNDY4ODAsMTM4OTMyNDE3OCwyMjQyNjkx
MDhdfQ==
-->