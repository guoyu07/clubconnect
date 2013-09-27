<?php

class DataUSStates {
    protected static $states = array(
           'AL'=>'AL',
           'AK'=>'AK',
           'AZ'=>'AZ',
           'AR'=>'AR',
           'CA'=>'CA',
           'CO'=>'CO',
           'CT'=>'CT',
           'DE'=>'DE',
           'DC'=>'DC',
           'FL'=>'FL',
           'GA'=>'GA',
           'HI'=>'HI',
           'ID'=>'ID',
           'IL'=>'IL',
           'IN'=>'IN',
           'IA'=>'IA',
           'KS'=>'KS',
           'KY'=>'KY',
           'LA'=>'LA',
           'ME'=>'ME',
           'MD'=>'MD',
           'MA'=>'MA',
           'MI'=>'MI',
           'MN'=>'MN',
           'MS'=>'MS',
           'MO'=>'MO',
           'MT'=>'MT',
           'NC'=>'NC',
           'NE'=>'NE',
           'NV'=>'NV',
           'NH'=>'NH',
           'NJ'=>'NJ',
           'NM'=>'NM',
           'NY'=>'NY',
           'ND'=>'ND',
           'OH'=>'OH',
           'OK'=>'OK',
           'OR'=>'OR',
           'PA'=>'PA',
           'RI'=>'RI',
           'SC'=>'SC',
           'SD'=>'SD',
           'TN'=>'TN',
           'TX'=>'TX',
           'UT'=>'UT',
           'VT'=>'VT',
           'VA'=>'VA',
           'WA'=>'WA',
           'WV'=>'WV',
           'WI'=>'WI',
           'WY'=>'WY');

    public static function getStates()
    {
        return self::$states;
    }
}

?>
