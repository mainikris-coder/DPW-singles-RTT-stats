# DPW-singles-RTT-stats

Single-page dashboard for the 2026 DPW singles RTT roster analytics dataset.

## Run locally

From the repository root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Included in this SPA

- Summary KPI cards
- Superfaction donut chart
- Disposition bar chart
- Player composition stacked bars
- Scatter plot of total units vs character points
- Filterable roster table

## Data source

The dashboard is powered by the tournament roster dataset included in the project and visualizes the 28-player Strike Force event data.
