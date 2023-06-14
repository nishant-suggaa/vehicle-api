| SL | Table              | Trigger                 | Action                     |
|----|--------------------|-------------------------|----------------------------|
|    | Vehicle            |                         |                            |
|    | Vehicle_location   |                         | 6) Current_location_inserted |
|    | Mock_Ride          | 1) on_insert            | 2) Api-on_mock_ride_insert  |
|    |                    |                         | 3) Mock_ride_path_gets_updated |
|    |                    | 4) on_update_path       | 5) On_mock_ride_update_path |
|    |                    |                         | index+1;                   |
|    |                    | 7) on_update_index      | 8) update_mock_ride        |
|    |                    |                         | -> update_index_in_mock_ride |
|    |                    |                         | -> repeat step (6)        |
|    |                    |                         |                            |
