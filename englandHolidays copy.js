const englandHolidays = {
  "version": "2020-06-13",
  "license": "CC-BY-SA-3",
  "holidays": {
    "GB": {
      "names": {
        "en": "United Kingdom"
      },
      "dayoff": "sunday",
      "zones": [
        "Europe/London"
      ],
      "langs": [
        "en"
      ],
      "days": {
        "01-01": {
          "_name": "01-01"
        },
        "substitutes 01-01 if sunday then next monday": {
          "substitute": true,
          "_name": "01-01"
        },
        "substitutes 01-01 if saturday then next monday": {
          "substitute": true,
          "_name": "01-01"
        },
        "easter -21": {
          "_name": "Mothers Day",
          "type": "observance"
        },
        "easter -2": {
          "_name": "easter -2"
        },
        "easter": {
          "_name": "easter"
        },
        "easter 1": {
          "_name": "easter 1"
        },
        "1st monday in May": {
          "name": {
            "en": "Early May bank holiday"
          },
          "disable": [
            "2020-05-04"
          ]
        },
        "2020-05-08": {
          "name": {
            "en": "Early May bank holiday (VE day)"
          }
        },
        "1st monday before 06-01": {
          "name": {
            "en": "Spring bank holiday"
          }
        },
        "12-25": {
          "_name": "12-25"
        },
        "substitutes 12-25 if saturday then next tuesday": {
          "substitute": true,
          "_name": "12-25"
        },
        "substitutes 12-25 if sunday then next tuesday": {
          "substitute": true,
          "_name": "12-25"
        },
        "12-26": {
          "_name": "12-26"
        },
        "substitutes 12-26 if saturday then next monday": {
          "substitute": true,
          "_name": "12-26"
        },
        "substitutes 12-26 if sunday then next monday": {
          "substitute": true,
          "_name": "12-26"
        },
        "2012-06-05": {
          "name": {
            "en": "Queen’s Diamond Jubilee"
          }
        }
      },
      "states": {
        "ALD": {
          "name": "Alderney",
          "zones": [
            "Europe/Guernsey"
          ],
          "days": {
            "12-15": {
              "name": {
                "en": "Homecoming Day"
              }
            }
          }
        },
        "ENG": {
          "name": "England",
          "days": {
            "1st monday before 09-01": {
              "name": {
                "en": "Summer bank holiday"
              }
            }
          }
        },
        "NIR": {
          "name": "Northern Ireland",
          "zones": [
            "Europe/Belfast"
          ],
          "days": {
            "03-17": {
              "name": {
                "en": "St Patrick's Day"
              }
            },
            "substitutes 03-17 if saturday then next monday": {
              "substitute": true,
              "name": {
                "en": "St Patrick's Day"
              }
            },
            "substitutes 03-17 if sunday then next monday": {
              "substitute": true,
              "name": {
                "en": "St Patrick's Day"
              }
            },
            "07-12": {
              "name": {
                "en": "Battle of the Boyne, Orangemen’s Day"
              }
            },
            "substitutes 07-12 if saturday then next monday": {
              "substitute": true,
              "name": {
                "en": "Battle of the Boyne"
              }
            },
            "substitutes 07-12 if sunday then next monday": {
              "substitute": true,
              "name": {
                "en": "Battle of the Boyne"
              }
            },
            "1st monday before 09-01": {
              "name": {
                "en": "Summer bank holiday"
              }
            }
          }
        },
        "SCT": {
          "name": "Scotland",
          "days": {
            "substitutes 01-01 if sunday then next monday": false,
            "substitutes 01-01 if saturday then next monday": false,
            "substitutes 01-01 if saturday then next tuesday": {
              "substitute": true,
              "_name": "01-01"
            },
            "substitutes 01-01 if sunday then next tuesday": {
              "substitute": true,
              "_name": "01-01"
            },
            "01-02": {
              "name": {
                "en": "Januar 2nd"
              }
            },
            "substitutes 01-02 if saturday then next monday": {
              "substitute": true,
              "name": {
                "en": "Januar 2nd"
              }
            },
            "substitutes 01-02 if sunday then next monday": {
              "substitute": true,
              "name": {
                "en": "Januar 2nd"
              }
            },
            "easter 1": {
              "_name": "easter 1"
            },
            "1st monday in August": {
              "name": {
                "en": "Summer bank holiday"
              }
            },
            "11-30": {
              "name": {
                "en": "St Andrew’s Day"
              }
            }
          }
        },
        "WLS": {
          "name": "Wales",
          "days": {
            "1st monday before 09-01": {
              "name": {
                "en": "Summer bank holiday"
              }
            }
          },
          "regions": null
        }
      }
    },
    "ZW": {
      "names": {
        "sn": "Nyika yeZimbabwe",
        "nd": "iRiphabhuliki yeZimbabwe",
        "xh": "iRiphubliki eyeZimbabwe",
        "kck": "Nyika yeZimbabwe",
        "en": "Zimbabwe"
      },
      "dayoff": "sunday",
      "langs": [
        "en"
      ],
      "zones": [
        "Africa/Maputo"
      ],
      "days": {
        "01-01": {
          "_name": "01-01"
        },
        "easter -2": {
          "_name": "easter -2"
        },
        "easter": {
          "_name": "easter",
          "type": "observance"
        },
        "easter 1": {
          "_name": "easter 1"
        },
        "04-18": {
          "_name": "Independence Day"
        },
        "05-01": {
          "_name": "05-01"
        },
        "05-25": {
          "name": {
            "en": "Africa Day"
          }
        },
        "2nd sunday in May": {
          "_name": "Mothers Day",
          "type": "observance"
        },
        "3rd sunday in June": {
          "_name": "Fathers Day",
          "type": "observance"
        },
        "2nd monday in August": {
          "name": {
            "en": "Heroes' Day"
          }
        },
        "2nd tuesday in August": {
          "name": {
            "en": "Defence Forces Day"
          }
        },
        "12-22": {
          "name": {
            "en": "Unity Day"
          }
        },
        "12-25": {
          "_name": "12-25"
        },
        "12-26": {
          "_name": "12-26"
        }
      }
    }
  },
  "names": {
    "01-01": {
      "name": {
        "en": "New Year's Day",
        "am": "እንቁጣጣሽ",
        "ar": "عيد رأس السنة",
        "az": "Yeni il",
        "be": "Новы год",
        "bg": "Нова Година",
        "bs": "Novogodisnji dan",
        "ca": "Any nou",
        "cz": "Nový rok",
        "da": "Nytår",
        "de": "Neujahr",
        "el": "Πρωτοχρονιά",
        "es": "Año Nuevo",
        "et": "uusaasta",
        "fi": "Uudenvuodenpäivä",
        "fil": "Araw ng Bagong Taon",
        "fo": "Nýggjársdagur",
        "fr": "Nouvel An",
        "hr": "Nova godina",
        "hu": "Újév",
        "hy": "Ամանոր",
        "it": "Capodanno",
        "is": "Nýársdagur",
        "jp": "元日",
        "kl": "ukiortaaq",
        "ko": "신정",
        "lt": "Naujieji metai",
        "lv": "Jaunais Gads",
        "mg": "Taom-baovao",
        "mk": "Нова Година",
        "mt": "L-Ewwel tas-Sena",
        "nl": "Nieuwjaar",
        "no": "Første nyttårsdag",
        "pap": "Aña Nobo",
        "pl": "Nowy Rok",
        "pt": "Ano Novo",
        "ro": "Anul nou",
        "ru": "Новый год",
        "sl": "novo leto",
        "sq": "Viti i Ri",
        "sr": "Нова година",
        "sv": "Nyårsdagen",
        "sw": "Mwaka mpya",
        "tr": "Yılbaşı",
        "uk": "Новий Рік",
        "vi": "Tết Dương lịch",
        "zh": "元旦"
      }
    },
    "01-06": {
      "name": {
        "en": "Epiphany",
        "am": "ብርሐነ ጥምቀት",
        "da": "Åbenbaring",
        "de": "Heilige Drei Könige",
        "de-ch": "Dreikönigstag",
        "es": "Día de los Reyes Magos",
        "et": "kolmekuningapäev",
        "fi": "Loppiainen",
        "fr": "l'Épiphanie",
        "el": "Θεοφάνεια",
        "hr": "Bogojavljenje, Sveta tri kralja",
        "it": "Befana",
        "is": "Þrettándinn",
        "nl": "Driekoningen",
        "mk": "Богојавление",
        "pl": "Święto Trzech Króli",
        "sk": "Zjavenie Pána",
        "sv": "Trettondedag jul",
        "vi": "Lễ Hiển Linh"
      }
    },
    "02-02": {
      "name": {
        "en": "Candlemas",
        "de": "Lichtmess",
        "nl": "Lichtmis",
        "vi": "Lễ Đức Mẹ dâng Chúa Giêsu trong đền thánh"
      }
    },
    "02-14": {
      "name": {
        "en": "Valentine's Day",
        "de": "Valentinstag",
        "fr": "Saint-Valentin",
        "nl": "Valentijnsdag",
        "vi": "Lễ tình nhân"
      }
    },
    "03-08": {
      "name": {
        "en": "International Women's Day",
        "az": "Qadınlar günü",
        "be": "Мiжнародны жаночы дзень",
        "bg": "Ден на жената",
        "fr": "Journée internationale des femmes",
        "hu": "Nemzetközi nőnap",
        "hy": "Կանանց տոն",
        "nl": "Internationale Vrouwendag",
        "ro": "Ziua Internationala a Femeii",
        "ru": "Международный женский день",
        "sl": "Mednarodni dan žena",
        "uk": "Міжнародний жіночий день",
        "vi": "Quốc tế Phụ nữ",
        "zh": "国际妇女节",
        "de": "Internationaler Frauentag"
      }
    },
    "03-19": {
      "name": {
        "en": "Saint Joseph",
        "de-at": "Josefitag",
        "de": "Josefstag",
        "es": "San José",
        "it": "San Giuseppe",
        "mt": "San Ġużepp",
        "nl": "Hoogfeest van de Heilige Jozef",
        "vi": "Kính Thánh Giuse"
      }
    },
    "04-01": {
      "name": {
        "en": "April Fools' Day",
        "nl": "1 April",
        "sq": "Dita e Gënjeshtrave",
        "vi": "Cá tháng tư"
      }
    },
    "05-01": {
      "name": {
        "en": "Labour Day",
        "en-us": "Labor Day",
        "ar": "يوم العمال",
        "be": "Дзень працы",
        "bg": "Ден на труда",
        "bs": "Radni dan",
        "cz": "Svátek práce",
        "da": "1. maj",
        "de": "Tag der Arbeit",
        "el": "Εργατική Πρωτομαγιά",
        "es": "Fiesta del trabajo",
        "et": "kevadpüha",
        "fi": "Vappu",
        "fil": "Araw ng mga Manggagawa",
        "fr": "Fête du travail",
        "hr": "Praznik rada",
        "hu": "A munka ünnepe",
        "hy": "Աշխատանքի օր",
        "it": "Festa del Lavoro",
        "is": "Hátíðisdagur Verkamanna",
        "lt": "Tarptautinė darbo diena",
        "lv": "Darba svētki",
        "nl": "Dag van de Arbeid",
        "no": "Arbeidernes dag",
        "mg": "Fetin'ny asa",
        "mk": "Ден на трудот",
        "mt": "Jum il-Ħaddiem",
        "pap": "Dia di Obrero",
        "pl": "Święto Pracy",
        "pt": "Dia do trabalhador",
        "ro": "Ziua muncii",
        "sk": "Sviatok práce",
        "sl": "praznik dela",
        "sq": "Dita Ndërkombëtare e Punonjësve",
        "sr": "Празник рада",
        "sv": "Första Maj",
        "uk": "День міжнародної солідарності трудящих",
        "vi": "Quốc tế Lao động",
        "zh": "劳动节"
      }
    },
    "06-29": {
      "name": {
        "en": "Saints Peter and Paul",
        "de": "Peter und Paul",
        "es": "San Pedro y San Pablo",
        "fr": "Saint Pierre et Paul",
        "it": "Santi Pietro e Paolo",
        "mt": "L-Imnarja",
        "nl": "Hoogfeest van Petrus en Paulus",
        "vi": "Lễ kính Thánh Phêrô"
      }
    },
    "08-15": {
      "name": {
        "en": "Assumption",
        "de": "Mariä Himmelfahrt",
        "es": "Asunción",
        "fr": "Assomption",
        "el": "Κοίμηση της Θεοτόκου",
        "hr": "Velika Gospa",
        "it": "Ferragosto",
        "lt": "Žolinė",
        "mg": "Asompsiona",
        "mk": "Успение на Пресвета Богородица",
        "mt": "Santa Marija",
        "nl": "O.L.V. Hemelvaart",
        "pl": "Wniebowzięcie Najświętszej Maryi Panny",
        "pt": "Assunção de Maria",
        "ro": "Adormirea Maicii Domnului",
        "sl": "Marijino vnebovzetje",
        "sq": "Shën Mëria e Gushtit",
        "vi": "Đức Mẹ Lên Trời"
      }
    },
    "11-01": {
      "name": {
        "en": "All Saints' Day",
        "bs": "Dita e të gjithë Shenjtorëve",
        "de": "Allerheiligen",
        "es": "Todos los Santos",
        "fi": "Pyhäinpäivä",
        "fil": "Undás; Todos los Santos; Araw ng mga Santo",
        "fr": "Toussaint",
        "hr": "Svi sveti",
        "hu": "Mindenszentek",
        "it": "Ognissanti",
        "lt": "Visų šventųjų diena",
        "mg": "Fetin'ny olo-masina",
        "mk": "Празникот на сите светци",
        "nl": "Allerheiligen",
        "pl": "Wszystkich Świętych",
        "pt": "Todos os santos",
        "sk": "Sviatok všetkých svätých",
        "sq": "Të gjitha Saints",
        "sr": "Сви Свети",
        "sv": "Alla helgons dag",
        "vi": "Lễ Các Thánh"
      }
    },
    "11-02": {
      "name": {
        "en": "All Souls' Day",
        "de": "Allerseelen",
        "es": "Día de los Difuntos",
        "et": "hingedepäev",
        "fil": "Araw ng mga Kaluluwa",
        "fr": "Fête des morts",
        "hr": "Dušni dan",
        "nl": "Allerzielen",
        "pt": "Dia de Finados",
        "vi": "Lễ Các Đẳng"
      }
    },
    "11-11": {
      "name": {
        "en": "Saint Martin",
        "de": "Sankt Martin (Faschingsbeginn)",
        "nl": "Sint Maarten",
        "vi": "Lễ thánh Martin"
      }
    },
    "12-06": {
      "name": {
        "en": "Saint Nicholas",
        "de": "Sankt Nikolaus",
        "fr": "Saint-Nicolas",
        "nl": "Sinterklaas",
        "vi": "Thánh Saint Nicholas"
      }
    },
    "12-08": {
      "name": {
        "en": "Immaculate Conception",
        "de": "Mariä Empfängnis",
        "es": "La inmaculada concepción",
        "fr": "Immaculée Conception",
        "it": "Immacolata Concezione",
        "mt": "Il-Kunċizzjoni",
        "nl": "Onbevlekte Ontvangenis van Maria",
        "pt": "Imaculada Conceição"
      }
    },
    "12-24": {
      "name": {
        "en": "Christmas Eve",
        "bg": "Бъдни вечер",
        "bs": "Badnji dan",
        "cz": "Štědrý den",
        "da": "Juleaften",
        "de": "Heiliger Abend",
        "es": "Nochebuena",
        "et": "jõululaupäev",
        "fo": "Jólaaftan",
        "fi": "Jouluaatto",
        "fil": "Bisperas ng Pasko",
        "fr": "Veille de Noël",
        "hr": "Badnji dan",
        "is": "Aðfangadagur",
        "kl": "juulliaraq",
        "lt": "Šv. Kūčios",
        "lv": "Ziemassvētku vakars",
        "nl": "Kerstavond",
        "no": "Julaften",
        "pt": "Noite de Natal",
        "sk": "Štedrý deň",
        "sq": "Nata e Krishtlindjes",
        "sr": "Бадњи дан",
        "sv": "Julafton",
        "vi": "Đêm Giáng Sinh"
      }
    },
    "12-25": {
      "name": {
        "en": "Christmas Day",
        "am": "ልደተ-ለእግዚእነ/ ገና",
        "bg": "Коледа",
        "bn": "বড়দিন",
        "bs": "Božić",
        "de-at": "Christtag",
        "ca": "Nadal",
        "cz": "1. svátek vánoční",
        "da": "Juledag",
        "de": "Weihnachten",
        "de-ch": "Weihnachtstag",
        "el": "Χριστούγεννα",
        "es": "Navidad",
        "et": "esimene jõulupüha",
        "fi": "Joulupäivä",
        "fil": "Araw ng Pasko",
        "fo": "Fyrsti jóladagur",
        "fr": "Noël",
        "hr": "Božić",
        "hu": "Karácsony",
        "hy": "Սուրբ Ծնունդ",
        "it": "Natale",
        "is": "Jóladagur",
        "jp": "ノエル",
        "kl": "juullerujussuaq",
        "ko": "기독탄신일",
        "lt": "Šv. Kalėdos",
        "lv": "Ziemassvētki",
        "mg": "Krismasy",
        "mk": "Католички Божиќ",
        "ms": "Hari Natal",
        "mt": "Il-Milied",
        "nl": "Kerstmis",
        "no": "Første Juledag",
        "pap": "Dia Pasco di Nascimento",
        "pl": "Pierwszy dzień Bożego Narodzenia",
        "pt": "Natal",
        "ro": "Crăciunul",
        "ru": "Рождество Христово",
        "sk": "Prvý sviatok vianočný",
        "sl": "božič",
        "sq": "Krishtlindja",
        "sr": "Католички Божић",
        "sv": "Juldagen",
        "sw": "Krismasi",
        "vi": "Lễ Giáng Sinh"
      }
    },
    "12-26": {
      "name": {
        "en": "Boxing Day",
        "bg": "2-ри ден на Коледа",
        "cz": "2. svátek vánoční",
        "da": "Anden Juledag",
        "de": "2. Weihnachtstag",
        "de-at": "Stefanitag",
        "de-ch": "Stephanstag",
        "el": "Δεύτερη μέρα των Χριστουγέννων",
        "es": "San Esteban",
        "et": "teine jõulupüha",
        "fi": "2. joulupäivä",
        "fo": "Fyrsti gerandisdagur eftir jóladag",
        "fr": "Lendemain de Noël",
        "hr": "Svetog Stjepana",
        "hu": "Karácsony másnapja",
        "it": "Santo Stefano",
        "is": "Annar í jólum",
        "kl": "juullip aappaa",
        "lt": "2. Kalėdų diena",
        "lv": "Otrie Ziemassvētki",
        "nl": "Tweede kerstdag",
        "no": "Andre juledag",
        "pap": "Di dos Dia Pasco di Nascimento",
        "pl": "Drugi dzień Bożego Narodzenia",
        "ro": "Două zi de Crăciun",
        "sk": "Druhý sviatok vianočný",
        "sv": "Annandag jul",
        "vi": "Ngày tặng quà"
      }
    },
    "12-31": {
      "name": {
        "en": "New Year's Eve",
        "da": "Nytårsaften",
        "de": "Silvester",
        "es": "Fin del Año",
        "fi": "Uudenvuodenaatto",
        "fil": "Bisperas ng Bagong Taon",
        "fo": "Nýggjársaftan",
        "fr": "Saint-Sylvestre",
        "hu": "Szilveszter",
        "hy": "Նոր տարվա գիշեր",
        "is": "Gamlársdagur",
        "it": "Ultimo dell’anno",
        "jp": "大晦日",
        "lv": "Vecgada vakars",
        "nl": "Oudejaarsavond",
        "no": "Nyttårsaften",
        "pt": "Véspera de Ano Novo",
        "sv": "Nyårsafton",
        "vi": "Đêm giao thừa"
      }
    },
    "easter -48": {
      "name": {
        "en": "Shrove Monday",
        "de": "Rosenmontag",
        "es": "Carnaval",
        "fr": "Lundi de Carnaval",
        "nl": "Carnavalmaandag",
        "pap": "Dialuna di Carnaval",
        "vi": "Ngày thứ hai hoa hồng"
      }
    },
    "easter -47": {
      "name": {
        "en": "Shrove Tuesday",
        "es": "Carnaval",
        "de": "Faschingsdienstag",
        "hr": "Pokladni utorak",
        "nl": "Vastenavond",
        "pt": "Carnaval",
        "vi": "Thứ ba mập béo"
      }
    },
    "easter -46": {
      "name": {
        "en": "Ash Wednesday",
        "de": "Aschermittwoch",
        "es": "Miercoles de Ceniza",
        "fr": "Mercredi des Cendres",
        "it": "Ceneri",
        "is": "Öskudagur",
        "nl": "Aswoensdag",
        "pt": "Quarta-feira de Cinzas",
        "sw": "Jumatano ya Majivu",
        "vi": "Thứ tư Lễ Tro"
      }
    },
    "easter -7": {
      "name": {
        "en": "Palm Sunday",
        "de": "Palmsonntag",
        "es": "Domingo de Ramos",
        "it": "Domenica delle Palme",
        "is": "Pálmasunnudagur",
        "nl": "Palmzondag",
        "no": "Palmesøndag",
        "vi": "Chúa nhật Lễ Lá"
      }
    },
    "easter -3": {
      "name": {
        "en": "Maundy Thursday",
        "cz": "Zelený čtvrtek",
        "da": "Skærtorsdag",
        "de": "Gründonnerstag",
        "es": "Jueves Santo",
        "fil": "Huwebes Santo",
        "fo": "Skírhósdagur",
        "fr": "Jeudi saint",
        "it": "Giovedì santo",
        "is": "Skírdagur",
        "kl": "sisamanngortoq illernartoq",
        "nl": "Witte donderdag",
        "no": "Skjærtorsdag",
        "vi": "Thứ năm Tuần Thánh"
      }
    },
    "easter -2": {
      "name": {
        "en": "Good Friday",
        "am": "ስቅለት",
        "bg": "Разпети петък",
        "bs": "Dobar petak",
        "cz": "Velký pátek",
        "da": "Langfredag",
        "de": "Karfreitag",
        "es": "Viernes Santo",
        "fi": "Pitkäperjantai",
        "fil": "Biyernes Santo",
        "fo": "Langafríggjadagur",
        "fr": "Vendredi saint",
        "el": "Μεγάλη Παρασκευή",
        "et": "suur reede",
        "hr": "Veliki petak",
        "it": "Venerdì santo",
        "is": "Föstudagurinn langi",
        "kl": "tallimanngornersuaq",
        "lv": "Lielā Piektdiena",
        "mt": "Il-Ġimgħa l-Kbira",
        "nl": "Goede Vrijdag",
        "no": "Langfredag",
        "pap": "Diabierna Santo",
        "pt": "Sexta-Feira Santa",
        "ro": "Vinerea Mare",
        "sk": "Veľkonočný piatok",
        "sq": "E Premtja e Madhe",
        "sr": "Католички Велики петак",
        "sv": "Långfredagen",
        "sw": "Ijumaa Kuu",
        "vi": "Thứ sáu Tuần Thánh"
      }
    },
    "easter -1": {
      "name": {
        "en": "Easter Saturday",
        "cz": "Bílá sobota",
        "de": "Karsamstag",
        "es": "Sabado Santo",
        "fil": "Sabado de Gloria",
        "fr": "Samedi saint",
        "it": "Sabado santo",
        "nl": "Dag voor Pasen",
        "no": "Påskeaften",
        "vi": "Thứ bảy Tuần Thánh"
      }
    },
    "easter": {
      "name": {
        "en": "Easter Sunday",
        "am": "ፋሲካ",
        "bg": "Великден",
        "bs": "Vaskrs",
        "cz": "Velikonoční neděle",
        "da": "Påskesøndag",
        "de": "Ostersonntag",
        "el": "Πάσχα",
        "es": "Pascua",
        "et": "lihavõtted",
        "fi": "Pääsiäispäivä",
        "fil": "Pasko ng Pagkabuhay",
        "fo": "Páskadagur",
        "fr": "Pâques",
        "hr": "Uskrs",
        "hu": "Húsvétvasárnap",
        "it": "Domenica di Pasqua",
        "is": "Páskadagur",
        "kl": "poorskip-ullua",
        "lt": "Velykos",
        "lv": "Lieldienas",
        "nl": "Pasen",
        "no": "Første påskedag",
        "pap": "Dia Pasco di Resureccion",
        "pl": "Niedziela Wielkanocna",
        "pt": "Páscoa",
        "ro": "Paștele",
        "sk": "Veľká noc",
        "sl": "velika noč",
        "sq": "Pashkët Katolike",
        "sr": "Католички Васкрс",
        "sv": "Påsk",
        "sw": "Pasaka",
        "vi": "Lễ Phục Sinh"
      }
    },
    "easter 1": {
      "name": {
        "en": "Easter Monday",
        "bg": "Велики понеделник",
        "bs": "Uskrsni ponedjeljak",
        "cz": "Velikonoční pondělí",
        "da": "Anden påskedag",
        "de": "Ostermontag",
        "el": "Δευτέρα του Πάσχα",
        "es": "Lunes de Pascua",
        "fi": "2. pääsiäispäivä",
        "fo": "Annar páskadagur",
        "fr": "Lundi de Pâques",
        "hr": "Uskršnji ponedjeljak",
        "hu": "Húsvéthétfő",
        "it": "Lunedì dell’Angelo",
        "is": "Annar í páskum",
        "kl": "poorskip-aappaa",
        "lv": "Otrās Lieldienas",
        "mg": "Alatsinain'ny Paska",
        "mk": "вториот ден на Велигден",
        "nl": "Tweede paasdag",
        "no": "Andre påskedag",
        "pap": "Di dos Dia Pasco di Resureccion",
        "pl": "Drugi dzień Wielkanocy",
        "ro": "Două zi de Pasti",
        "sk": "Veľkonočný pondelok",
        "sl": "Velikonočni ponedeljek",
        "sr": "Католички Васкрсни понедељак",
        "sv": "Annandag påsk",
        "sw": "Jumatatu ya Pasaka",
        "vi": "Thứ hai phục sinh"
      }
    },
    "easter 39": {
      "name": {
        "en": "Ascension Day",
        "da": "Kristi Himmelfartsdag",
        "de": "Christi Himmelfahrt",
        "es": "La Asunción",
        "fi": "Helatorstai",
        "fo": "Kristi Himmalsferðardagur",
        "fr": "Ascension",
        "it": "Ascensione",
        "is": "Uppstigningardagur",
        "kl": "qilaliarfik",
        "mg": "Andro niakarana",
        "nl": "O.L.H. Hemelvaart",
        "no": "Kristi himmelfartsdag",
        "pap": "Dia di Asuncion",
        "ro": "Ziua Eroilor",
        "sv": "Kristi himmelfärds dag",
        "vi": "Lễ Thăng Thiên"
      }
    },
    "easter 49": {
      "name": {
        "en": "Pentecost",
        "da": "Pinsedag",
        "de": "Pfingstsonntag",
        "el": "Αγίου Πνεύματος",
        "es": "Pentecostés",
        "et": "nelipühade 1. püha",
        "fi": "Helluntaipäivä",
        "fo": "Hvítusunnudagur",
        "fr": "Pentecôte",
        "hu": "Pünkösdvasárnap",
        "it": "Pentecoste",
        "is": "Hvítasunnudagur",
        "kl": "piinsip ullua",
        "nl": "Pinksteren",
        "no": "Første pinsedag",
        "mk": "Духовден",
        "pl": "Zielone Świątki",
        "ro": "Rusaliile",
        "sl": "binkošti",
        "sv": "Pingst",
        "uk": "Трійця",
        "vi": "Lễ Chúa Thánh Thần Hiện Xuống"
      }
    },
    "easter 50": {
      "name": {
        "en": "Whit Monday",
        "da": "Anden Pinsedag",
        "de": "Pfingstmontag",
        "es": "Lunes de Pentecostés",
        "fo": "Annar hvítusunnudagur",
        "fr": "Lundi de Pentecôte",
        "hu": "Pünkösdhétfő",
        "it": "Lunedì di Pentecoste",
        "is": "Annar í hvítasunnu",
        "kl": "piinsip aappaa",
        "mg": "Alatsinain'ny Pentekosta",
        "nl": "Tweede pinksterdag",
        "no": "Andre pinsedag",
        "ro": "Două zi de Rusalii"
      }
    },
    "easter 60": {
      "name": {
        "en": "Corpus Christi",
        "de": "Fronleichnam",
        "es": "Corpus Christi",
        "fr": "la Fête-Dieu",
        "it": "Corpus Domini",
        "hr": "Tijelovo",
        "nl": "Sacramentsdag",
        "pl": "Dzień Bożego Ciała",
        "pt": "Corpo de Deus",
        "vi": "Lễ Mình và Máu Thánh Chúa Kitô"
      }
    },
    "julian 01-01": {
      "name": {
        "en": "Orthodox New Year",
        "bs": "Pravoslavni novogodišnji dan",
        "hr": "Pravoslavna Nova Godina",
        "nl": "Orthodox Nieuwjaar",
        "sq": "Viti i Ri Ortodoks",
        "sr": "Православна Нова година"
      }
    },
    "julian 12-24": {
      "name": {
        "en": "Orthodox Christmas Eve",
        "nl": "Orthodox Kerstavond",
        "mk": "Бадник"
      }
    },
    "julian 12-25": {
      "name": {
        "en": "Orthodox Christmas",
        "bs": "Pravoslavni Božić",
        "hr": "Pravoslavni Božić",
        "mk": "Прв ден Божик",
        "nl": "Orthodox Kerstmis",
        "ro": "Craciun pe Rit Vechi",
        "sq": "Krishtlindjet Ortodokse",
        "sr": "Божић",
        "uk": "Різдво"
      }
    },
    "orthodox -2": {
      "name": {
        "en": "Orthodox Good Friday",
        "mk": "Велики Петок",
        "nl": "Orthodoxe Goede vrijdag",
        "sr": "Велики петак"
      }
    },
    "orthodox": {
      "name": {
        "en": "Orthodox Easter",
        "bs": "Pravoslavni Vaskrs",
        "hr": "Pravoslavni Uskrs",
        "mk": "Прв ден Велигден",
        "nl": "Orthodox Pasen",
        "sq": "Pashkët Ortodokse",
        "sr": "Васкрс",
        "uk": "Великдень"
      }
    },
    "orthodox 1": {
      "name": {
        "en": "Orthodox Easter Monday",
        "mk": "Втор ден Велигден",
        "nl": "Orthodoxe Tweede Paasdag",
        "sr": "Васкрсни понедељак"
      }
    },
    "1 Muharram": {
      "name": {
        "en": "Islamic New Year",
        "ar": "رأس السنة الهجرية",
        "bs": "Nova hidžretska godina",
        "fil": "Unang Araw ng Muharram",
        "hr": "Nova hidžretska godina",
        "ms": "Awal Tahun Hijrah",
        "nl": "Islamitisch Nieuwjaar",
        "sq": "Viti i Ri hixhri"
      }
    },
    "10 Muharram": {
      "name": {
        "en": "Day of Ashura",
        "ar": "عاشوراء",
        "bn": "আশুরা",
        "nl": "Asjoera"
      }
    },
    "12 Rabi al-awwal": {
      "name": {
        "en": "Birthday of Muhammad (Mawlid)",
        "am": "መውሊድ",
        "ar": "المولد النبويّ",
        "bn": "ঈদে মিলাদুন্নবী",
        "bs": "Mevlud",
        "fr": "Mawlid",
        "ms": "Maulidur Rasul",
        "nl": "Mawlid an-Nabi",
        "sq": "Mevludi"
      }
    },
    "27 Rajab": {
      "name": {
        "en": "Laylat al-Mi'raj",
        "ar": "الإسراء والمعراج",
        "bs": "Lejletul Mi'radž",
        "ms": "Israk dan Mikraj",
        "nl": "Laylat al-Miraadj",
        "sq": "Nata e Miraxhit",
        "tr": "Miraç Gecesi"
      }
    },
    "15 Shaban": {
      "name": {
        "en": "Laylat al-Bara'at",
        "ar": "ليلة البراءة",
        "bs": "Lejletul berat",
        "nl": "Laylat al-Baraat",
        "sq": "Nata e Beratit"
      }
    },
    "1 Ramadan": {
      "name": {
        "en": "First day of Ramadan",
        "am": "ረመዳን",
        "ar": "اليوم الأول من رمضان",
        "bs": "Prvi dan posta",
        "ms": "Hari Pertama Berpuasa",
        "nl": "Eerste dag van Ramadan",
        "sq": "Dita e parë e agjërimit"
      }
    },
    "27 Ramadan": {
      "name": {
        "en": "Laylat al-Qadr",
        "ar": "لیلة القدر",
        "bs": "Lejletul kadr",
        "nl": "Waardevolle Nacht (Laylat al-Qadr)",
        "sq": "Nata e Kadrit"
      }
    },
    "1 Shawwal": {
      "name": {
        "en": "End of Ramadan (Eid al-Fitr)",
        "am": "ዒድ አል ፈጥር",
        "ar": "عيد الفطر",
        "az": "Ramazan Bayramı",
        "bn": "ঈদুল ফিতর",
        "bs": "Ramazanski bajram",
        "de": "Zuckerfest",
        "fil": "Pagwawakas ng Ramadan",
        "fr": "Fête de fin du Ramadan",
        "hr": "Ramazanski bajram",
        "nl": "Suikerfeest (Eid al-Fitr)",
        "mk": "Рамазан Бајрам",
        "ms": "Hari Raya Aidil Fitri",
        "sq": "Fitër Bajrami",
        "tr": "Ramazan Bayramı",
        "sr": "Рамазански Бајрам",
        "sw": "Idd-ul-Fitr"
      }
    },
    "9 Dhu al-Hijjah": {
      "name": {
        "en": "Arafat Day",
        "ar": "يوم عرفة"
      }
    },
    "10 Dhu al-Hijjah": {
      "name": {
        "en": "Feast of the Sacrifice (Eid al-Adha)",
        "am": "ዒድ አል አድሐ",
        "ar": "عيد الأضحى",
        "az": "Qurban Bayramı",
        "bn": "ঈদুল আযহা",
        "bs": "Kurbanski bajram",
        "de": "Opferfest",
        "fil": "Eidul Adha",
        "fr": "Fête du mouton",
        "hr": "Kurban-bajram",
        "nl": "Offerfeest (Eid Al-Adha)",
        "mk": "Курбан Бајрам",
        "ms": "Hari Raya Aidil Adha",
        "sq": "Kurban Bajrami",
        "tr": "Kurban Bayramı",
        "sr": "Курбански Бајрам",
        "sw": "Idd-ul-Azha"
      }
    },
    "15 Nisan": {
      "name": {
        "en": "Pesach",
        "bs": "Pesah",
        "de": "Pessach",
        "hr": "Pesač",
        "nl": "Pesach",
        "sq": "Pesach",
        "sr": "Песах"
      }
    },
    "1 Tishrei": {
      "name": {
        "en": "Rosh Hashanah",
        "bs": "Roš Hašana",
        "de": "Rosch Haschana",
        "hr": "Roš Hašane",
        "nl": "Rosj Hasjana",
        "sq": "Rosh Hashanah",
        "sr": "Рош Хашана"
      }
    },
    "10 Tishrei": {
      "name": {
        "en": "Yom Kippur",
        "bs": "Jom Kipur",
        "de": "Jom Kippur",
        "hr": "Jom Kipur",
        "mk": "Јом Кипур",
        "nl": "Jom Kipoer",
        "sq": "Yom Kippur",
        "sr": "Јом Кипур"
      }
    },
    "Deepavali": {
      "name": {
        "en": "Deepavali"
      }
    },
    "Vesak": {
      "name": {
        "en": "Vesak Day"
      }
    },
    "Abolition of Slavery": {
      "name": {
        "en": "Abolition of Slavery",
        "fr": "Abolition de l’esclavage",
        "nl": "Afschaffing van de slavernij",
        "vi": "Bãi bỏ chế độ Nô lệ"
      }
    },
    "Buß- und Bettag": {
      "name": {
        "de": "Buß- und Bettag",
        "en": "Day of Prayer and Repentance"
      }
    },
    "Constitution Day": {
      "name": {
        "en": "Constitution Day",
        "da": "Grundlovsdag",
        "de": "Tag der Verfassung",
        "ca": "Dia de la Constitució",
        "es": "Día de la Constitución",
        "fil": "Araw ng Saligang Batas",
        "fo": "Grundlógardagur",
        "hy": "Սահմանադրության օր",
        "jp": "憲法記念日",
        "ko": "제헌절",
        "nl": "Dag van de Grondwet",
        "no": "Grunnlovsdagen",
        "pt": "Dia da Constituição",
        "ro": "Ziua Constituției",
        "sk": "Deň Ústavy",
        "sq": "Dita e Kushtetutës",
        "uk": "День Конституції",
        "vi": "Ngày pháp luật"
      }
    },
    "Fathers Day": {
      "name": {
        "en": "Father's Day",
        "et": "isadepäev",
        "lt": "Tėvo diena",
        "nl": "Vaderdag",
        "pt": "Dia dos Pais",
        "no": "Farsdag",
        "vi": "Ngày của cha"
      }
    },
    "Independence Day": {
      "name": {
        "en": "Independence Day",
        "ar": "عيد الاستقلال",
        "be": "Дзень Незалежнасцi",
        "bg": "Ден на независимостта",
        "bs": "Dan nezavisnosti",
        "de": "Unabhängigkeitstag",
        "es": "Día de la Independencia",
        "et": "iseseisvuspäev",
        "fi": "Itsenäisyyspäivä",
        "fil": "Araw ng Kalayaan",
        "fr": "Jour de l'Indépendance",
        "hr": "Dan neovisnosti",
        "hy": "Անկախության օր",
        "mk": "Ден на независноста",
        "mt": "Jum l-Indipendenza",
        "nl": "Onafhankelijkheidsdag",
        "pl": "Narodowe Święto Niepodległości",
        "pt": "Dia da Independência",
        "ro": "Ziua Independentei",
        "sq": "Dita e Pavarësisë",
        "sr": "Дан независности",
        "sv": "Självständighetsdagen",
        "sw": "Siku ya uhuru",
        "uk": "День Незалежності",
        "vi": "Ngày Độc lập"
      }
    },
    "Liberation Day": {
      "name": {
        "en": "Liberation Day",
        "nl": "Bevrijdingsdag",
        "no": "Frigjøringsdagen",
        "sq": "Dita e Çlirimit",
        "vi": "Ngày Thống nhất"
      }
    },
    "Mothers Day": {
      "name": {
        "en": "Mother's Day",
        "cz": "Den matek",
        "da": "Mors Dag",
        "de": "Muttertag",
        "el": "Γιορτή της μητέρας",
        "es": "Día de la Madre",
        "et": "emadepäev",
        "fi": "Äitien päivä",
        "fr": "Fête des Mères",
        "hr": "Majčin dan",
        "hu": "Anyák napja",
        "hy": "Ցեղասպանության զոհերի հիշատակի օր",
        "is": "Mæðradagurinn",
        "it": "Festa della mamma",
        "lt": "Motinos diena",
        "lv": "Mātes diena",
        "nl": "Moederdag",
        "no": "Morsdag",
        "pt": "Dia das Mães",
        "pl": "Dzień Matki",
        "ro": "Ziua Mamei",
        "sq": "Dita e Nënës",
        "sv": "Mors dag",
        "vi": "Ngày của mẹ"
      }
    },
    "National Holiday": {
      "name": {
        "en": "National Holiday",
        "de": "Nationalfeiertag",
        "es": "Fiesta Nacional",
        "fr": "Fête nationale",
        "el": "εθνική επέτειος",
        "nl": "Nationale feestdag",
        "vi": "Quốc Lễ"
      }
    },
    "Public Holiday": {
      "name": {
        "en": "Public Holiday",
        "fr": "Jour férié légaux",
        "nl": "Wettelijke feestdag",
        "pt": "Feriado Obrigatório",
        "vi": "Nghỉ lễ Toàn Quốc"
      }
    },
    "Reformation Day": {
      "name": {
        "en": "Reformation Day",
        "de": "Reformationstag",
        "es": "Día Nacional de las Iglesias Evangélicas y Protestantes",
        "nl": "Hervormingsdag",
        "vi": "Kháng Cách"
      }
    },
    "Revolution Day": {
      "name": {
        "en": "Revolution Day",
        "es": "Día de la Revolución",
        "nl": "Dag van de revolutie",
        "vi": "Tổng khởi nghĩa"
      }
    },
    "substitutes": {
      "name": {
        "en": "substitute day",
        "az": "əvəz gün",
        "bs": "zamjena dan",
        "de": "Ersatztag",
        "es": "día sustituto",
        "fr": "jour substitut",
        "hr": "zamjena dan",
        "jp": "振替休日",
        "lv": "aizstājējs diena",
        "mk": "заменет ден",
        "nl": "substituut",
        "sq": "ditë zëvendësuese",
        "sr": "замена дан",
        "uk": "замінити день",
        "vi": "ngày thay thế"
      }
    }
  }
};
export default englandHolidays;
