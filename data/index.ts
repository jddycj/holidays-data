import china2015 from "./china/2015.json";
import china2016 from "./china/2016.json";
import china2017 from "./china/2017.json";
import china2018 from "./china/2018.json";
import china2019 from "./china/2019.json";
import china2020 from "./china/2020.json";
import china2021 from "./china/2021.json";
import china2022 from "./china/2022.json";
import china2023 from "./china/2023.json";
import china2024 from "./china/2024.json";
import china2025 from "./china/2025.json";
import china2026 from "./china/2026.json";

import hongkong2015 from "./hongkong/2015.json";
import hongkong2016 from "./hongkong/2016.json";
import hongkong2017 from "./hongkong/2017.json";
import hongkong2018 from "./hongkong/2018.json";
import hongkong2019 from "./hongkong/2019.json";
import hongkong2020 from "./hongkong/2020.json";
import hongkong2021 from "./hongkong/2021.json";
import hongkong2022 from "./hongkong/2022.json";
import hongkong2023 from "./hongkong/2023.json";
import hongkong2024 from "./hongkong/2024.json";
import hongkong2025 from "./hongkong/2025.json";
import hongkong2026 from "./hongkong/2026.json";

import usa2015 from "./usa/2015.json";
import usa2016 from "./usa/2016.json";
import usa2017 from "./usa/2017.json";
import usa2018 from "./usa/2018.json";
import usa2019 from "./usa/2019.json";
import usa2020 from "./usa/2020.json";
import usa2021 from "./usa/2021.json";
import usa2022 from "./usa/2022.json";
import usa2023 from "./usa/2023.json";
import usa2024 from "./usa/2024.json";
import usa2025 from "./usa/2025.json";
import usa2026 from "./usa/2026.json";

import france2015 from "./france/2015.json";
import france2016 from "./france/2016.json";
import france2017 from "./france/2017.json";
import france2018 from "./france/2018.json";
import france2019 from "./france/2019.json";
import france2020 from "./france/2020.json";
import france2021 from "./france/2021.json";
import france2022 from "./france/2022.json";
import france2023 from "./france/2023.json";
import france2024 from "./france/2024.json";
import france2025 from "./france/2025.json";
import france2026 from "./france/2026.json";

import germany2015 from "./germany/2015.json";
import germany2016 from "./germany/2016.json";
import germany2017 from "./germany/2017.json";
import germany2018 from "./germany/2018.json";
import germany2019 from "./germany/2019.json";
import germany2020 from "./germany/2020.json";
import germany2021 from "./germany/2021.json";
import germany2022 from "./germany/2022.json";
import germany2023 from "./germany/2023.json";
import germany2024 from "./germany/2024.json";
import germany2025 from "./germany/2025.json";
import germany2026 from "./germany/2026.json";

import japan2015 from "./japan/2015.json";
import japan2016 from "./japan/2016.json";
import japan2017 from "./japan/2017.json";
import japan2018 from "./japan/2018.json";
import japan2019 from "./japan/2019.json";
import japan2020 from "./japan/2020.json";
import japan2021 from "./japan/2021.json";
import japan2022 from "./japan/2022.json";
import japan2023 from "./japan/2023.json";
import japan2024 from "./japan/2024.json";
import japan2025 from "./japan/2025.json";
import japan2026 from "./japan/2026.json";

export const REGIONS = ["china", "hongkong", "usa", "france", "germany", "japan"];

export const ALL_DATA: Record<string, Record<number, any>> = {
  china: {
    2015: china2015, 2016: china2016, 2017: china2017, 2018: china2018,
    2019: china2019, 2020: china2020, 2021: china2021, 2022: china2022,
    2023: china2023, 2024: china2024, 2025: china2025, 2026: china2026,
  },
  hongkong: {
    2015: hongkong2015, 2016: hongkong2016, 2017: hongkong2017, 2018: hongkong2018,
    2019: hongkong2019, 2020: hongkong2020, 2021: hongkong2021, 2022: hongkong2022,
    2023: hongkong2023, 2024: hongkong2024, 2025: hongkong2025, 2026: hongkong2026,
  },
  usa: {
    2015: usa2015, 2016: usa2016, 2017: usa2017, 2018: usa2018,
    2019: usa2019, 2020: usa2020, 2021: usa2021, 2022: usa2022,
    2023: usa2023, 2024: usa2024, 2025: usa2025, 2026: usa2026,
  },
  france: {
    2015: france2015, 2016: france2016, 2017: france2017, 2018: france2018,
    2019: france2019, 2020: france2020, 2021: france2021, 2022: france2022,
    2023: france2023, 2024: france2024, 2025: france2025, 2026: france2026,
  },
  germany: {
    2015: germany2015, 2016: germany2016, 2017: germany2017, 2018: germany2018,
    2019: germany2019, 2020: germany2020, 2021: germany2021, 2022: germany2022,
    2023: germany2023, 2024: germany2024, 2025: germany2025, 2026: germany2026,
  },
  japan: {
    2015: japan2015, 2016: japan2016, 2017: japan2017, 2018: japan2018,
    2019: japan2019, 2020: japan2020, 2021: japan2021, 2022: japan2022,
    2023: japan2023, 2024: japan2024, 2025: japan2025, 2026: japan2026,
  },
};
