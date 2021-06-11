Feature: Api Testing

    #@focus
    Scenario Outline: Test api using get method
        #Given visit web
        When  I send method name "<method>" and end point "<endPoint>" and verify status code "<statusCode>"
        Examples:
            | method | endPoint     | statusCode |
            | GET    | /api/users/2 | 200        |
            | DELETE | /api/users/2 | 204        |

    @focus
    Scenario Outline: Test api using post method
        When  I send method name "<method>" and end point "<endPoint>" and name "<name>" and job "<job>" verify status code "<statusCode>"
        Examples:
            | method | endPoint     | name     | job           | statusCode |
            | POST   | /api/users   | morpheus | leader        | 201        |
            | PUT    | /api/users   | morpheus | zion resident | 200        |
            | GET    | /api/users/2 |          |               | 200        |
            | DELETE | /api/users/2 |          |               | 204        |

    #@focus
    Scenario: Use data tables
        When I send multiple data
            | name | number |
            | Amol | 818096 |
            | Om   | 86895  |
            | ram  | 865686 |

    #@focus
    Scenario: Test api using post method
        When  I send POST request to create the new employee
            | method | endPoint   | name     | job    | statusCode |
            | POST   | /api/users | morpheus | leader | 201        |
# | PUT    | /api/users | amol     | zion resident | 200        |

