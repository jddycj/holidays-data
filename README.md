# holidays-data

节假日数据集合，包含多个地区的公共节假日信息。

## 支持地区

- 中国大陆
- 香港
- 美国
- 法国
- 德国
- 日本

## 数据格式

每个地区每年一个 JSON 文件，按 `data/{地区}/{年份}.json` 组织：

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
      "fixed": true,
      "global": true,
      "counties": null,
      "launchYear": null,
      "types": ["Public"]
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

## 参与贡献

1. Fork 本仓库
2. 新建 `Feat_xxx` 分支
3. 提交代码
4. 新建 Pull Request

## 许可证

MIT
