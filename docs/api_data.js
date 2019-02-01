define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "_home_angad_go_src_github_com_GDGVIT_Project_Hades_docs_main_js",
    "groupTitle": "_home_angad_go_src_github_com_GDGVIT_Project_Hades_docs_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/post-attendance",
    "title": "mark attendance",
    "name": "mark_attendance",
    "group": "attendance",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eventName",
            "description": "<p>name of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "registrationNumber",
            "description": "<p>registration number of the participant</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "day",
            "description": "<p>day of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "coupons",
            "description": "<p>number of coupons for that day</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "\n{\n\n\t\"details\":{\n\t\t\"eventName\":\"DEVFEST\",\n\t\t\"day\":2,\n\t\t\"coupons\":5,\n\t\t\"email\":\"angad.sharma2017@vitstudent.ac.in\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"rs\": \"done\",\n   \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./attendance/pkg/service/service.go",
    "groupTitle": "attendance"
  },
  {
    "type": "post",
    "url": "/post-attendance",
    "title": "view coupons",
    "name": "view_coupons",
    "group": "attendance",
    "permission": [
      {
        "name": "admin"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eventName",
            "description": "<p>name of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "registrationNumber",
            "description": "<p>registration number of the participant</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "day",
            "description": "<p>day of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "coupons",
            "description": "<p>number of coupons for that day</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "\n{\n\n\t\"details\":{\n\t\t\"eventName\":\"DEVFEST\",\n\t\t\"day\":2,\n\t\t\"coupons\":5,\n\t\t\"email\":\"angad.sharma2017@vitstudent.ac.in\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "/**",
          "type": "json"
        },
        {
          "title": "request-example",
          "content": "\n{\n\n\t\"query\":{\n\t\t\"eventName\":\"DEVFEST\",\n\t\t\"day\":2,\n\t\t\"email\":\"angad.sharma2017@vitstudent.ac.in\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"rs\": [\n       \"$2a$05$Q6p2bV07hR2Kp02jPbo9UOUtV.FZhRfpQDHApdN.xp/5XmSYS0PGC\",\n       \"$2a$05$MPED5ZYA4Q9QwK.mZCaskew/hmM/HOvuN2Vx042QIENEoaUAFS6zW\",\n       \"$2a$05$/iDvNw/11F/xCWMbbRjgMOWWZ1ICJB7crmW2mr0BNI5vElXqPHQL6\",\n       \"$2a$05$IhZM3URq0VMCT1KO/OBeJOPJiG/XZ5y.AW9nLZVgpewGCuBSap/zC\",\n       \"$2a$05$YN95rNFZB9Y7o0UOyQHUlu.7iJ6nZSFf0SNWrHjtboQB3LgHkHcLa\",\n       \"$2a$05$5rAbmkgHkO0VVrcgT8LuwOpty0STOKaTKaEuSYbQtu.YqyM/5jOsa\",\n       \"$2a$05$KmGC/i4VnZFb9h5789dIcu0jz/v6.HKUXPKlUgBKD7HzpUtsLkgD.\",\n       \"$2a$05$4QxBr9uahOE6bW6JMHeXBuuF4P3uRIZJCIebaB91oaj9mjjVGdmIW\",\n       \"$2a$05$IHWoPSkldlbC9YafMTY2w..jw5uCY1zpGCxbMQPFRh/vM4gHCMoFC\",\n       \"$2a$05$QY6oN1pXcRjU.7XIwcgi/u9/D3iz/RXI2od/oqy5zzNY16tNDvN3W\"\n   ],\n   \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./attendance/pkg/service/service.go",
    "groupTitle": "attendance"
  },
  {
    "type": "post",
    "url": "/create-event",
    "title": "create a new event",
    "name": "create_a_new_event",
    "group": "events",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:8800/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clubName",
            "description": "<p>Name of your club</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of your event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "toDate",
            "description": "<p>ending date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fromDate",
            "description": "<p>start date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "toTime",
            "description": "<p>start time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fromTime",
            "description": "<p>ending time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "budget",
            "description": "<p>budget</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>event description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>category of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "venue",
            "description": "<p>event venue</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attendance",
            "description": "<p>Name of your club</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expectedParticipants",
            "description": "<p>Expected Participants in the event</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "facultyCoordinator",
            "description": "<p>faculty coordinator details (Participant Object)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "studentCoordinator",
            "description": "<p>student coordinator details (Participant Object)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "guest",
            "description": "<p>guest details (Guest object)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PROrequest",
            "description": "<p>PRO department requests</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "campusEngineerRequest",
            "description": "<p>Campus engineer requests</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>duration of event</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "mainSponsor",
            "description": "<p>sponsor details (Participant Object)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "\n\"event\":{\n \"clubName\":\"GDG\",\n \"name\":\"DEVRELCONF\",\n \"toDate\":\"10TH OCTOBER\",\n \"fromDate\":\"8TH OCTOBER\",\n \"toTime\":\"10 PM\",\n \"fromTime\":\"11 AM\",\n \"budget\":\"200000\",\n \"description\":\"TECHNICAL EVENT AT GDG VIT. ITS GONNA BE AMAZING\",\n \"category\":\"TECHNICAL\",\n \"venue\":\"ANNA AUDI\",\n \"attendance\":\"4000\",\n \"expectedParticipants\":\"4000\",\n \"facultyCoordinator\":{\n    \"name\":\"NOORU MAA\",\n    \"registrationNumber\":\"17BBE1010\",\n    \"email\":\"SDADAS@A.COM\",\n    \"phoneNumber\":\"919191991911\",\n    \"gender\":\"M\",\n    \"eventsAttended\":\"ALL\"\n },\n \"studentCoordinator\":{\n    \"name\":\"NOOR\",\n    \"registrationNumber\":\"17BBE1010\",\n    \"email\":\"SDADAS@A.COM\",\n    \"phoneNumber\":\"919191991911\",\n    \"gender\":\"M\",\n    \"eventsAttended\":\"ALL\"\n },\n \"guest\":{\n    \"name\":\"DAAS\",\n    \"email\":\"ASDSAD#ASD.COM\",\n    \"phoneNumber\":\"11111111111\",\n    \"gender\":\"F\",\n    \"stake\":\"SOME MONAYYYY\",\n    \"locationOfStay\":\"GHAR\"\n },\n \"PROrequest\":\"SAJDOOSIJANDFSAKFDSAFD\",\n \"campusEngineerRequest\":\"SDFHBSADUB, ASNFD , AS KDFSAM FDSA, AS, SD\",\n \"duration\":\"16 hours\",\n \"mainSponsor\":{\n    \"name\":\"DAASA\",\n    \"email\":\"ASDSAD#ASD.COM\",\n    \"phoneNumber\":\"11111111111\",\n    \"gender\":\"F\",\n    \"stake\":\"SOME MONAYYYY\",\n    \"locationOfStay\":\"GHAR2\"\n }",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n\trs:\"created\",\n\terr:null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./events/pkg/service/service.go",
    "groupTitle": "events"
  },
  {
    "type": "post",
    "url": "/delete-event",
    "title": "delete an event",
    "name": "delete_an_event",
    "group": "events",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>key to query the event by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>value of the key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"query\":{\n\t\t\"key\":\"clubName\",\n\t\t\"value\":\"GDG\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n\t rs:\"deleted\",\n\t err:null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./events/pkg/service/service.go",
    "groupTitle": "events"
  },
  {
    "type": "post",
    "url": "/read-event",
    "title": "read an event",
    "name": "read_an_event",
    "group": "events",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>key to query the event by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>value of the key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "   \"query\":{\n\t\t\"key\":\"clubName\",\n\t\t\"value\":\"GDG\"\n\t}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"rs\": {\n       \"clubName\": \"GDG\",\n       \"name\": \"DEVRELCONF\",\n       \"toDate\": \"10TH OCTOBER\",\n       \"fromDate\": \"8TH OCTOBER\",\n       \"toTime\": \"10 PM\",\n       \"fromTime\": \"11 AM\",\n       \"budget\": \"200000\",\n       \"description\": \"TECHNICAL EVENT AT GDG VIT. ITS GONNA BE AMAZING\",\n       \"category\": \"TECHNICAL\",\n       \"venue\": \"ANNA AUDI\",\n       \"attendance\": \"4000\",\n       \"expectedParticipants\": \"4000\",\n       \"facultyCoordinator\": {\n           \"name\": \"NOORU MAA\",\n           \"registrationNumber\": \"17BBE1010\",\n           \"email\": \"SDADAS@A.COM\",\n           \"phoneNumber\": \"919191991911\",\n           \"gender\": \"M\"\n       },\n       \"studentCoordinator\": {\n           \"name\": \"NOORU BAAP\",\n           \"registrationNumber\": \"17BBE1010\",\n           \"email\": \"SDADAS@A.COM\",\n           \"phoneNumber\": \"919191991911\",\n           \"gender\": \"M\"\n       },\n       \"guest\": {\n           \"name\": \"ALLAHH DAAS\",\n           \"email\": \"ASDSAD#ASD.COM\",\n           \"phoneNumber\": \"11111111111\",\n           \"gender\": \"F\",\n           \"stake\": \"SOME MONAYYYY\",\n           \"locationOfStay\": \"TERA GHAR\"\n       },\n       \"PROrequest\": \"SAJDOOSIJANDFSAKFDSAFD\",\n       \"campusEngineerRequest\": \"SDFHBSADUB, ASNFD , AS KDFSAM FDSA, AS, SD\",\n       \"duration\": \"16 hours\",\n       \"mainSponsor\": {\n           \"name\": \"\",\n           \"registrationNumber\": \"\",\n           \"email\": \"\",\n           \"phoneNumber\": \"\",\n           \"gender\": \"\"\n       },\n       \"status\": \"false\"\n   },\n   \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./events/pkg/service/service.go",
    "groupTitle": "events"
  },
  {
    "type": "post",
    "url": "/update-event",
    "title": "update an event",
    "name": "update_an_event",
    "group": "events",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>key to query the event by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>value of the key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "changeKey",
            "description": "<p>key of the value which needs to be altered</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "changeValue",
            "description": "<p>the new value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"query\":{\n\t\t\"key\":\"clubName\",\n\t\t\"value\":\"GDG\",\n\t\t\"changeKey\":\"clubName\",\n\t\t\"changeValue\":\"codechef\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n\trs:\"updated\",\n\terr:null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./events/pkg/service/service.go",
    "groupTitle": "events"
  },
  {
    "type": "post",
    "url": "/create-attendee",
    "title": "create an attendee",
    "name": "create_an_attendee",
    "group": "participants",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the participant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registrationNumber",
            "description": "<p>registration number of the participant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the participant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phoneNumber of the participant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the participant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventName",
            "description": "<p>name of the event registering for</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"details\":{\n     \"name\":\"angad sharma\",\n     \"registrationNumber\":\"17BBE1010\",\n     \"email\":\"SDADAS@A.COM\",\n     \"phoneNumber\":\"919191991911\",\n     \"gender\":\"M\",\n     \"eventsAttended\":\"ALL\",\n     \"eventName\":\"DEVSOC\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"rs\": \"created\",\n   \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./participants/pkg/service/service.go",
    "groupTitle": "participants"
  },
  {
    "type": "post",
    "url": "/delete-attendee",
    "title": "delete an attendee",
    "name": "delete_an_attendee",
    "group": "participants",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>key to query the attendee by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>value of the key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"query\":{\n\t\t\"key\":\"name\",\n\t\t\"Value\":\"dhruv sharma\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"rs\": \"deleted\",\n   \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./participants/pkg/service/service.go",
    "groupTitle": "participants"
  },
  {
    "type": "post",
    "url": "/read-attendee",
    "title": "read an attendee",
    "name": "read_an_attendee",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "group": "participants",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>key to query the attendee by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>value of the key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"query\":{\n\t\t\"key\":\"name\",\n\t\t\"Value\":\"angad sharma\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"rs\": [\n       {\n           \"name\": \"angad sharma\",\n           \"registrationNumber\": \"17BBE1010\",\n           \"email\": \"SDADAS@A.COM\",\n           \"phoneNumber\": \"919191991911\",\n           \"gender\": \"M\",\n\t\t\t \"attended\":\"absent\"\n       }\n   ],\n   \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./participants/pkg/service/service.go",
    "groupTitle": "participants"
  },
  {
    "type": "post",
    "url": "/update-attendee",
    "title": "update an attendee",
    "name": "update_an_attendee",
    "group": "participants",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>key to query the attendee by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>value of the key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "changeKey",
            "description": "<p>key of the value which needs to be altered</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "changeValue",
            "description": "<p>the new value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"query\":{\n\t\t\"key\":\"name\",\n\t\t\"Value\":\"dhruv sharma\",\n\t\t\"changeKey\":\"name\",\n\t\t\"changeValue\":\"dhruv sharma\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "\n{\n   \"rs\": \"updated\",\n   \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./participants/pkg/service/service.go",
    "groupTitle": "participants"
  }
] });
