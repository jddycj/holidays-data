# holidays-data

Public holiday data collection for multiple regions.

## Supported Regions

| Region | Directory | Code |
|--------|-----------|------|
| China | china | CN |
| Hong Kong | hongkong | HK |
| United States | usa | US |
| France | france | FR |
| Germany | germany | DE |
| Japan | japan | JP |

## Data Format

One JSON file per region per year, stored at: `data/{directory}/{year}.json`

```json
{
  "region": "china",
  "year": 2026,
  "holidays": [
    {
      "date": "2026-01-01",
      "localName": "元旦",
      "name": "New Year's Day",
      "countryCode": "CN",
      "fixed": false,
      "global": true,
      "counties": null,
      "launchYear": null,
      "types": ["Public"],
      "adjustWorkdays": ["2026-01-04"],
      "extendedDaysOff": ["2026-01-01", "2026-01-02", "2026-01-03"]
    }
  ]
}
```

## Field Descriptions

| Field | Description |
|-------|-------------|
| `date` | Date (YYYY-MM-DD) |
| `localName` | Local language name |
| `name` | English name |
| `countryCode` | Country/region code |
| `fixed` | Whether the date is fixed |
| `global` | Whether it applies nationwide |
| `counties` | County codes if only applicable to certain areas |
| `launchYear` | Year the holiday was established |
| `types` | Type, `Public` = statutory holiday |
| `adjustWorkdays` | Makeup workdays (China only) |
| `extendedDaysOff` | All rest days during extended holiday (China only) |

## Data Access

**GitHub**
```
https://raw.githubusercontent.com/jddycj/holidays-data/main/data/{directory}/{year}.json
```

**Gitee**
```
https://raw.giteeusercontent.com/jddxym/holidays-data/master/data/{directory}/{year}.json
```

Example:
```
https://raw.githubusercontent.com/jddycj/holidays-data/main/data/france/2026.json
https://raw.giteeusercontent.com/jddxym/holidays-data/master/data/france/2026.json
```

## Contributing

1. Fork the repository
2. Create `Feat_xxx` branch
3. Commit your code
4. Create Pull Request

## License

MIT
