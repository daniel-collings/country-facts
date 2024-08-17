import { describe, expect, test } from 'vitest'
import { render } from '@/utils/testUtils.tsx'
import MultiMatches from '@/pages/MultiMatches.tsx'

const multiMatchedDataExample = [
  {
    name: {
      common: 'Netherlands',
      official: 'Kingdom of the Netherlands',
      nativeName: {
        nld: {
          official: 'Koninkrijk der Nederlanden',
          common: 'Nederland'
        }
      }
    },
    tld: ['.nl'],
    cca2: 'NL',
    ccn3: '528',
    cca3: 'NLD',
    cioc: 'NED',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€'
      }
    },
    idd: {
      root: '+3',
      suffixes: ['1']
    },
    capital: ['Amsterdam'],
    altSpellings: ['NL', 'Holland', 'Nederland', 'The Netherlands'],
    region: 'Europe',
    subregion: 'Western Europe',
    languages: {
      nld: 'Dutch'
    },
    translations: {
      ara: {
        official: 'مملكة هولندا',
        common: 'هولندا'
      },
      bre: {
        official: 'Rouantelezh an Izelvroioù',
        common: 'Izelvroioù'
      },
      ces: {
        official: 'Nizozemské království',
        common: 'Nizozemsko'
      },
      cym: {
        official: 'Kingdom of the Netherlands',
        common: 'Netherlands'
      },
      deu: {
        official: 'Niederlande',
        common: 'Niederlande'
      },
      est: {
        official: 'Madalmaade Kuningriik',
        common: 'Holland'
      },
      fin: {
        official: 'Alankomaat',
        common: 'Alankomaat'
      },
      fra: {
        official: 'Pays-Bas',
        common: 'Pays-Bas'
      },
      hrv: {
        official: 'Holandija',
        common: 'Nizozemska'
      },
      hun: {
        official: 'Holland Királyság',
        common: 'Hollandia'
      },
      ita: {
        official: 'Paesi Bassi',
        common: 'Paesi Bassi'
      },
      jpn: {
        official: 'オランダ',
        common: 'オランダ'
      },
      kor: {
        official: '네덜란드 왕국',
        common: '네덜란드'
      },
      nld: {
        official: 'Nederland',
        common: 'Nederland'
      },
      per: {
        official: 'هلند',
        common: 'هلند'
      },
      pol: {
        official: 'Królestwo Niderlandów',
        common: 'Holandia'
      },
      por: {
        official: 'Holanda',
        common: 'Holanda'
      },
      rus: {
        official: 'Нидерланды',
        common: 'Нидерланды'
      },
      slk: {
        official: 'Holandské kráľovstvo',
        common: 'Holansko'
      },
      spa: {
        official: 'Países Bajos',
        common: 'Países Bajos'
      },
      srp: {
        official: 'Краљевина Холандија',
        common: 'Холандија'
      },
      swe: {
        official: 'Nederländerna',
        common: 'Nederländerna'
      },
      tur: {
        official: 'Hollanda',
        common: 'Hollanda'
      },
      urd: {
        official: 'مملکتِ نیدرلینڈز',
        common: 'نیدرلینڈز'
      },
      zho: {
        official: '荷兰',
        common: '荷兰'
      }
    },
    latlng: [52.5, 5.75],
    landlocked: false,
    borders: ['BEL', 'DEU'],
    area: 41850.0,
    demonyms: {
      eng: {
        f: 'Dutch',
        m: 'Dutch'
      },
      fra: {
        f: 'Néerlandaise',
        m: 'Néerlandais'
      }
    },
    flag: '\uD83C\uDDF3\uD83C\uDDF1',
    maps: {
      googleMaps: 'https://goo.gl/maps/Hv6zQswGhFxoVVBm6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/47796'
    },
    population: 16655799,
    gini: {
      '2018': 28.1
    },
    fifa: 'NED',
    car: {
      signs: ['NL'],
      side: 'right'
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/nl.png',
      svg: 'https://flagcdn.com/nl.svg',
      alt: 'The flag of the Netherlands is composed of three equal horizontal bands of red, white and blue.'
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/nl.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/nl.svg'
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [52.35, 4.92]
    },
    postalCode: {
      format: '#### @@',
      regex: '^(\\d{4}[A-Z]{2})$'
    }
  },
  {
    name: {
      common: 'Caribbean Netherlands',
      official: 'Bonaire, Sint Eustatius and Saba',
      nativeName: {
        nld: {
          official: 'Bonaire, Sint Eustatius en Saba',
          common: 'Caribisch Nederland'
        },
        pap: {
          official: 'Boneiru, Sint Eustatius y Saba',
          common: 'Boneiru, Sint Eustatius y Saba'
        }
      }
    },
    tld: ['.bq', '.nl'],
    cca2: 'BQ',
    ccn3: '535',
    cca3: 'BES',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$'
      }
    },
    idd: {
      root: '+5',
      suffixes: ['99']
    },
    capital: ['Kralendijk'],
    altSpellings: ['BES islands'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
      nld: 'Dutch',
      pap: 'Papiamento'
    },
    translations: {
      ara: {
        official: 'بونير وسينت أوستاتيوس وسابا',
        common: 'الجزر الكاريبية الهولندية'
      },
      bre: {
        official: 'Bonaire, Sint Eustatius ha Saba',
        common: 'Bonaire, Sint Eustatius ha Saba'
      },
      ces: {
        official: 'Karibské Nizozemsko',
        common: 'Karibské Nizozemsko'
      },
      cym: {
        official: 'Bonaire, Sint Eustatius and Saba',
        common: 'Caribbean Netherlands'
      },
      deu: {
        official: 'Bonaire, Sint Eustatius und Saba',
        common: 'Karibische Niederlande'
      },
      est: {
        official: 'Bonaire, Sint Eustatius ja Saba',
        common: 'Bonaire, Sint Eustatius ja Saba'
      },
      fin: {
        official: 'Bonaire, Sint Eustatius ja Saba',
        common: 'Bonaire, Sint Eustatius ja Saba'
      },
      fra: {
        official: 'Bonaire, Saint-Eustache et Saba',
        common: 'Pays-Bas caribéens'
      },
      hrv: {
        official: 'Bonaire, Sint Eustatius i Saba',
        common: 'Bonaire, Sint Eustatius i Saba'
      },
      hun: {
        official: 'Bonaire',
        common: 'Bonaire'
      },
      ita: {
        official: 'Bonaire, Sint Eustatius e Saba',
        common: 'Paesi Bassi caraibici'
      },
      jpn: {
        official: 'ボネール、シント・ユースタティウスおよびサバ',
        common: 'ボネール、シント・ユースタティウスおよびサバ'
      },
      kor: {
        official: '보네르, 신트외스타티위스, 사바',
        common: '카리브 네덜란드'
      },
      nld: {
        official: 'Bonaire, Sint Eustatius en Saba',
        common: 'Caribisch Nederland'
      },
      per: {
        official: 'جزایر کارائیب هلند',
        common: 'جزایر کارائیب هلند'
      },
      pol: {
        official: 'Bonaire, Sint Eustatius i Saba',
        common: 'Antyle Holenderskie'
      },
      por: {
        official: 'Bonaire, Saba e Santo Eustáquio',
        common: 'Países Baixos Caribenhos'
      },
      rus: {
        official: 'Бонэйр, Синт-Эстатиус и Саба',
        common: 'Карибские Нидерланды'
      },
      slk: {
        official: 'Bonaire, Sint Eustatius a Saba',
        common: 'Bonaire, Sint Eustatius a Saba'
      },
      spa: {
        official: 'Bonaire, San Eustaquio y Saba',
        common: 'Caribe Neerlandés'
      },
      srp: {
        official: 'Бонер, Свети Еустахије и Саба',
        common: 'Карипска Холандија'
      },
      swe: {
        official: 'Bonaire, Sint Eustatius and Saba',
        common: 'Karibiska Nederländerna'
      },
      tur: {
        official: 'Karayip Hollandası',
        common: 'Karayip Hollandası'
      },
      urd: {
        official: 'بونایر، سینٹ ایوسٹائیس اور سابا',
        common: 'کیریبین نیدرلینڈز'
      },
      zho: {
        official: '荷蘭加勒比區',
        common: '荷蘭加勒比區'
      }
    },
    latlng: [12.18, -68.25],
    landlocked: false,
    area: 328.0,
    demonyms: {
      eng: {
        f: 'Dutch',
        m: 'Dutch'
      },
      fra: {
        f: 'Néerlandaise',
        m: 'Néerlandais'
      }
    },
    flag: '\uD83C\uDDE7\uD83C\uDDF6',
    maps: {
      googleMaps: 'https://goo.gl/maps/4XVes1P6uEDTz77WA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1216720'
    },
    population: 25987,
    car: {
      signs: [''],
      side: 'right'
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/bq.png',
      svg: 'https://flagcdn.com/bq.svg'
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bq.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bq.svg'
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [12.14, -68.27]
    }
  }
]
describe('MultiMatches Page', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <MultiMatches data={multiMatchedDataExample} />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
