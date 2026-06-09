# holidays-data

节假日数据集合，包含多个地区的公共节假日信息。

## 支持地区

| 地区 | 目录名 | 代码 |
|------|--------|------|
| 中国大陆 | china | CN |
| 香港 | hongkong | HK |
| 美国 | usa | US |
| 法国 | france | FR |
| 德国 | germany | DE |
| 日本 | japan | JP |

## 数据格式

每个地区每年一个 JSON 文件，路径：`data/{目录名}/{年份}.json`

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

## 字段说明

| 字段 | 说明 |
|------|------|
| `date` | 日期（YYYY-MM-DD） |
| `localName` | 当地语言名称 |
| `name` | 英文名称 |
| `countryCode` | 国家/地区代码 |
| `fixed` | 日期是否固定 |
| `global` | 是否全国/全境适用 |
| `counties` | 部分地区适用时列出地区代码 |
| `launchYear` | 节假日创立年份 |
| `types` | 类型，`Public` = 法定节假日 |
| `adjustWorkdays` | 调休上班日（仅中国大陆） |
| `extendedDaysOff` | 连休期间所有休息日（仅中国大陆） |

## 数据获取

**GitHub**
```
https://raw.githubusercontent.com/jddycj/holidays-data/main/data/{目录名}/{年份}.json
```

**Gitee**
```
https://raw.giteeusercontent.com/jddxym/holidays-data/master/data/{目录名}/{年份}.json
```

示例：
```
https://raw.githubusercontent.com/jddycj/holidays-data/main/data/france/2026.json
https://raw.giteeusercontent.com/jddxym/holidays-data/master/data/france/2026.json
```

## 参与贡献

1. Fork 本仓库
2. 新建 `Feat_xxx` 分支
3. 提交代码
4. 新建 Pull Request

## 许可证

MIT
