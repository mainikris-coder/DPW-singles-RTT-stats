const tournamentData = {
  tournamentMeta: {
    totalPlayers: 28,
    totalPointsFielded: 55880,
    totalUnitsFielded: 383,
    totalCharacterUnits: 115,
    totalCharacterPoints: 16620,
    totalVehicleMonsterPoints: 22060,
    totalInfantryMountedPoints: 33820,
  },
  superfactions: [
    { name: 'Imperium', count: 11, percentage: 39.29 },
    { name: 'Chaos', count: 11, percentage: 39.29 },
    { name: 'Xenos', count: 6, percentage: 21.43 },
  ],
  dispositions: [
    { name: 'Purge the Foe', count: 8, percentage: 28.57 },
    { name: 'Priority Assets', count: 7, percentage: 25.0 },
    { name: 'Disruption', count: 6, percentage: 21.43 },
    { name: 'Take and Hold', count: 4, percentage: 14.29 },
    { name: 'Reconnaissance', count: 3, percentage: 10.71 },
  ],
  players: [
    { id: 1, name: 'Andet Fischer', faction: 'Leagues of Votann', superfaction: 'Xenos', disposition: 'Disruption', points: 1995, totalUnits: 20, charPts: 460, vehicleMonsterPts: 355, infantryMountedPts: 1640 },
    { id: 2, name: 'Anders Gottliebsen', faction: 'Chaos Space Marines', superfaction: 'Chaos', disposition: 'Reconnaissance', points: 1995, totalUnits: 11, charPts: 785, vehicleMonsterPts: 0, infantryMountedPts: 1995 },
    { id: 3, name: 'Christian Jensen', faction: 'Adepta Sororitas', superfaction: 'Imperium', disposition: 'Priority Assets', points: 2000, totalUnits: 14, charPts: 455, vehicleMonsterPts: 1445, infantryMountedPts: 555 },
    { id: 4, name: 'Christopher Jensen', faction: 'Space Marines (Space Wolves)', superfaction: 'Imperium', disposition: 'Purge the Foe', points: 1995, totalUnits: 11, charPts: 520, vehicleMonsterPts: 160, infantryMountedPts: 1835 },
    { id: 5, name: 'Gorm Løvstrand', faction: 'Chaos Space Marines', superfaction: 'Chaos', disposition: 'Reconnaissance', points: 2000, totalUnits: 15, charPts: 305, vehicleMonsterPts: 395, infantryMountedPts: 1605 },
    { id: 6, name: 'Jeppe Tørnblad', faction: 'Adeptus Custodes', superfaction: 'Imperium', disposition: 'Take and Hold', points: 2000, totalUnits: 12, charPts: 265, vehicleMonsterPts: 1040, infantryMountedPts: 960 },
    { id: 7, name: 'Johan Friberg Sørensen', faction: 'Grey Knights', superfaction: 'Imperium', disposition: 'Priority Assets', points: 2000, totalUnits: 12, charPts: 565, vehicleMonsterPts: 650, infantryMountedPts: 1350 },
    { id: 8, name: 'Johan Lorenz', faction: 'Adeptus Mechanicus', superfaction: 'Imperium', disposition: 'Reconnaissance', points: 2000, totalUnits: 15, charPts: 615, vehicleMonsterPts: 980, infantryMountedPts: 1020 },
    { id: 9, name: 'Johan Toftvad', faction: 'Death Guard', superfaction: 'Chaos', disposition: 'Disruption', points: 1985, totalUnits: 14, charPts: 655, vehicleMonsterPts: 1445, infantryMountedPts: 540 },
    { id: 10, name: 'Kasper Gerlach', faction: 'Space Marines (Blood Angels)', superfaction: 'Imperium', disposition: 'Purge the Foe', points: 1995, totalUnits: 15, charPts: 755, vehicleMonsterPts: 0, infantryMountedPts: 1995 },
    { id: 11, name: 'Kasper Gunni', faction: 'Orks', superfaction: 'Xenos', disposition: 'Priority Assets', points: 2000, totalUnits: 16, charPts: 555, vehicleMonsterPts: 370, infantryMountedPts: 1630 },
    { id: 12, name: 'Kian Kochen', faction: 'Adeptus Custodes', superfaction: 'Imperium', disposition: 'Take and Hold', points: 2000, totalUnits: 10, charPts: 500, vehicleMonsterPts: 810, infantryMountedPts: 1190 },
    { id: 13, name: 'Kris Lianee Maini-Thorsen', faction: 'Orks', superfaction: 'Xenos', disposition: 'Purge the Foe', points: 1995, totalUnits: 14, charPts: 730, vehicleMonsterPts: 860, infantryMountedPts: 1135 },
    { id: 14, name: 'Lasse Overby', faction: 'Adeptus Custodes', superfaction: 'Imperium', disposition: 'Take and Hold', points: 2000, totalUnits: 11, charPts: 265, vehicleMonsterPts: 1000, infantryMountedPts: 1000 },
    { id: 15, name: 'Mads Asmann-Gravsen', faction: "Emperor's Children", superfaction: 'Chaos', disposition: 'Purge the Foe', points: 1990, totalUnits: 13, charPts: 865, vehicleMonsterPts: 995, infantryMountedPts: 995 },
    { id: 16, name: 'Mads Frese', faction: 'Adeptus Custodes', superfaction: 'Imperium', disposition: 'Purge the Foe', points: 2000, totalUnits: 10, charPts: 470, vehicleMonsterPts: 750, infantryMountedPts: 1250 },
    { id: 17, name: 'Mads Wehage', faction: 'Chaos Space Marines', superfaction: 'Chaos', disposition: 'Purge the Foe', points: 2000, totalUnits: 12, charPts: 495, vehicleMonsterPts: 0, infantryMountedPts: 2000 },
    { id: 18, name: 'Marcus Stilborg', faction: 'Chaos Space Marines', superfaction: 'Chaos', disposition: 'Take and Hold', points: 1995, totalUnits: 13, charPts: 410, vehicleMonsterPts: 1705, infantryMountedPts: 290 },
    { id: 19, name: 'Mathias Madsen', faction: 'Orks', superfaction: 'Xenos', disposition: 'Priority Assets', points: 2000, totalUnits: 14, charPts: 805, vehicleMonsterPts: 160, infantryMountedPts: 1840 },
    { id: 20, name: 'Nicolai Nielsen', faction: 'Space Marines (Ultramarines)', superfaction: 'Imperium', disposition: 'Purge the Foe', points: 1990, totalUnits: 13, charPts: 255, vehicleMonsterPts: 1300, infantryMountedPts: 690 },
    { id: 21, name: 'Niels Stenkilde', faction: 'Death Guard', superfaction: 'Chaos', disposition: 'Priority Assets', points: 1990, totalUnits: 14, charPts: 655, vehicleMonsterPts: 1450, infantryMountedPts: 540 },
    { id: 22, name: 'Nikolaj Essing', faction: 'Grey Knights', superfaction: 'Imperium', disposition: 'Disruption', points: 2000, totalUnits: 10, charPts: 815, vehicleMonsterPts: 525, infantryMountedPts: 1475 },
    { id: 23, name: 'Peter Green', faction: "Emperor's Children", superfaction: 'Chaos', disposition: 'Disruption', points: 1995, totalUnits: 15, charPts: 260, vehicleMonsterPts: 900, infantryMountedPts: 1095 },
    { id: 24, name: 'Rasmus Kristiansen', faction: 'Death Guard', superfaction: 'Chaos', disposition: 'Disruption', points: 1995, totalUnits: 14, charPts: 665, vehicleMonsterPts: 1445, infantryMountedPts: 550 },
    { id: 25, name: 'Samed Beyoglu', faction: 'World Eaters', superfaction: 'Chaos', disposition: 'Purge the Foe', points: 2000, totalUnits: 14, charPts: 1110, vehicleMonsterPts: 840, infantryMountedPts: 1160 },
    { id: 26, name: 'Steffen Hansen', faction: 'World Eaters', superfaction: 'Chaos', disposition: 'Disruption', points: 1990, totalUnits: 12, charPts: 440, vehicleMonsterPts: 990, infantryMountedPts: 1000 },
    { id: 27, name: 'Søren Hansen', faction: 'Orks', superfaction: 'Xenos', disposition: 'Priority Assets', points: 1995, totalUnits: 17, charPts: 990, vehicleMonsterPts: 380, infantryMountedPts: 1615 },
    { id: 28, name: 'Tobias Jensen', faction: 'Necrons', superfaction: 'Xenos', disposition: 'Priority Assets', points: 1985, totalUnits: 14, charPts: 955, vehicleMonsterPts: 1250, infantryMountedPts: 735 },
  ],
};

const superfactionColors = {
  Imperium: '#7ec8ff',
  Chaos: '#ff6b6b',
  Xenos: '#8be39b',
};

const state = {
  search: '',
  superfaction: 'All',
  faction: 'All',
  disposition: 'All',
};

const summaryCardsTarget = document.getElementById('summaryCards');
const resultsCountTarget = document.getElementById('resultsCount');
const tableBody = document.getElementById('playerTableBody');
const compositionTarget = document.getElementById('compositionBars');
const themeToggleButton = document.getElementById('themeToggle');

const makeCurrency = (value) => value.toLocaleString('en-GB');

function getThemeColors() {
  const isDark = document.body.dataset.theme === 'dark';

  return {
    text: isDark ? '#e9edf6' : '#172033',
    muted: isDark ? '#a7b3c9' : '#5a6478',
    grid: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.08)',
    card: isDark ? '#171c2a' : '#ffffff',
    page: isDark ? '#0d1117' : '#f3f6fb',
    border: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.08)',
    input: isDark ? '#111827' : '#f8fafc',
  };
}

function applyTheme(theme) {
  const nextTheme = theme === 'light' ? 'light' : 'dark';
  document.body.dataset.theme = nextTheme;
  localStorage.setItem('dpw-theme', nextTheme);

  const label = document.querySelector('.theme-label');
  const icon = document.querySelector('.theme-icon');
  const isDark = nextTheme === 'dark';

  label.textContent = isDark ? 'Light mode' : 'Dark mode';
  icon.textContent = isDark ? '☀️' : '🌙';

  if (window.superfactionChart) {
    window.superfactionChart.options.plugins.legend.labels.color = getThemeColors().text;
    window.superfactionChart.update();
  }

  if (window.dispositionChart) {
    window.dispositionChart.options.scales.x.ticks.color = getThemeColors().text;
    window.dispositionChart.options.scales.x.grid.color = getThemeColors().grid;
    window.dispositionChart.options.scales.y.ticks.color = getThemeColors().text;
    window.dispositionChart.options.plugins.legend.labels.color = getThemeColors().text;
    window.dispositionChart.update();
  }

  if (window.scatterChart) {
    window.scatterChart.options.plugins.legend.labels.color = getThemeColors().text;
    window.scatterChart.options.scales.x.ticks.color = getThemeColors().text;
    window.scatterChart.options.scales.x.grid.color = getThemeColors().grid;
    window.scatterChart.options.scales.x.title.color = getThemeColors().text;
    window.scatterChart.options.scales.y.ticks.color = getThemeColors().text;
    window.scatterChart.options.scales.y.grid.color = getThemeColors().grid;
    window.scatterChart.options.scales.y.title.color = getThemeColors().text;
    window.scatterChart.update();
  }
}

function populateFilters() {
  const superfactions = ['All', ...new Set(tournamentData.players.map((player) => player.superfaction))];
  const factions = ['All', ...new Set(tournamentData.players.map((player) => player.faction))];
  const dispositions = ['All', ...new Set(tournamentData.players.map((player) => player.disposition))];

  const fillSelect = (id, values) => {
    const select = document.getElementById(id);
    select.innerHTML = values
      .map((value) => `<option value="${value}">${value}</option>`)
      .join('');
  };

  fillSelect('superfactionFilter', superfactions);
  fillSelect('factionFilter', factions);
  fillSelect('dispositionFilter', dispositions);

  document.getElementById('superfactionFilter').value = state.superfaction;
  document.getElementById('factionFilter').value = state.faction;
  document.getElementById('dispositionFilter').value = state.disposition;
}

function getFilteredPlayers() {
  return tournamentData.players.filter((player) => {
    const searchMatch = player.name.toLowerCase().includes(state.search.toLowerCase());
    const superfactionMatch = state.superfaction === 'All' || player.superfaction === state.superfaction;
    const factionMatch = state.faction === 'All' || player.faction === state.faction;
    const dispositionMatch = state.disposition === 'All' || player.disposition === state.disposition;
    return searchMatch && superfactionMatch && factionMatch && dispositionMatch;
  });
}

function renderSummary(filteredPlayers) {
  const totalPlayers = filteredPlayers.length;
  const totalPoints = filteredPlayers.reduce((sum, player) => sum + player.points, 0);
  const totalUnits = filteredPlayers.reduce((sum, player) => sum + player.totalUnits, 0);
  const totalCharPoints = filteredPlayers.reduce((sum, player) => sum + player.charPts, 0);

  const cards = [
    { label: 'Players', value: totalPlayers, detail: `${makeCurrency(totalPlayers)} listed` },
    { label: 'Total points', value: makeCurrency(totalPoints), detail: 'fielded by filtered roster' },
    { label: 'Average points', value: `${Math.round(totalPoints / (totalPlayers || 1))}`, detail: 'per player' },
    { label: 'Total units', value: totalUnits, detail: `${makeCurrency(totalCharPoints)} character points` },
  ];

  summaryCardsTarget.innerHTML = cards
    .map(
      (card) => `
        <article class="card stat-card">
          <span class="stat-label">${card.label}</span>
          <strong class="stat-value">${card.value}</strong>
          <span class="stat-detail">${card.detail}</span>
        </article>
      `,
    )
    .join('');
}

function makeCompositionBars(filteredPlayers) {
  if (!filteredPlayers.length) {
    compositionTarget.innerHTML = '<p class="empty-state">No players match the active filters.</p>';
    return;
  }

  const ordered = [...filteredPlayers].sort((a, b) => b.vehicleMonsterPts - a.vehicleMonsterPts);
  const maxTotal = Math.max(...ordered.map((player) => player.points), 1);

  compositionTarget.innerHTML = ordered
    .map((player) => {
      const vehicleRatio = (player.vehicleMonsterPts / player.points) * 100;
      const infantryRatio = (player.infantryMountedPts / player.points) * 100;

      return `
        <div class="composition-row">
          <div class="composition-meta">
            <span>${player.name}</span>
            <small>${player.points} pts</small>
          </div>
          <div class="composition-stack" style="--max:${maxTotal}px">
            <span class="segment vehicle" style="width:${vehicleRatio}%" title="Vehicle/monster: ${player.vehicleMonsterPts} pts"></span>
            <span class="segment infantry" style="width:${infantryRatio}%" title="Infantry/mounted: ${player.infantryMountedPts} pts"></span>
          </div>
        </div>
      `;
    })
    .join('');
}

function renderTable(filteredPlayers) {
  resultsCountTarget.textContent = `${filteredPlayers.length} / ${tournamentData.players.length} players`;

  if (!filteredPlayers.length) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="9" class="empty-state">No roster data matches the selected filters.</td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = filteredPlayers
    .map(
      (player) => `
        <tr>
          <td>${player.name}</td>
          <td>${player.faction}</td>
          <td>${player.superfaction}</td>
          <td>${player.disposition}</td>
          <td>${player.points}</td>
          <td>${player.totalUnits}</td>
          <td>${player.charPts}</td>
          <td>${player.vehicleMonsterPts}</td>
          <td>${player.infantryMountedPts}</td>
        </tr>
      `,
    )
    .join('');
}

function updateCharts(filteredPlayers) {
  const superfactionSummary = ['Imperium', 'Chaos', 'Xenos'].map((label) => ({
    label,
    count: filteredPlayers.filter((player) => player.superfaction === label).length,
  }));

  const dispositionSummary = ['Purge the Foe', 'Priority Assets', 'Disruption', 'Take and Hold', 'Reconnaissance'].map((label) => ({
    label,
    count: filteredPlayers.filter((player) => player.disposition === label).length,
  }));

  const scatterPoints = filteredPlayers.map((player) => ({
    x: player.totalUnits,
    y: player.charPts,
    label: player.name,
    group: player.superfaction,
  }));

  const colors = getThemeColors();

  if (window.superfactionChart) {
    window.superfactionChart.data.labels = superfactionSummary.map((entry) => entry.label);
    window.superfactionChart.data.datasets[0].data = superfactionSummary.map((entry) => entry.count);
    window.superfactionChart.options.plugins.legend.labels.color = colors.text;
    window.superfactionChart.update();
  } else {
    window.superfactionChart = new Chart(document.getElementById('superfactionChart'), {
      type: 'doughnut',
      data: {
        labels: superfactionSummary.map((entry) => entry.label),
        datasets: [{
          label: 'Players',
          data: superfactionSummary.map((entry) => entry.count),
          backgroundColor: ['#7ec8ff', '#ff6b6b', '#8be39b'],
          borderColor: colors.page,
          borderWidth: 2,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { color: colors.text } },
        },
      },
    });
  }

  if (window.dispositionChart) {
    window.dispositionChart.data.labels = dispositionSummary.map((entry) => entry.label);
    window.dispositionChart.data.datasets[0].data = dispositionSummary.map((entry) => entry.count);
    window.dispositionChart.options.scales.x.ticks.color = colors.text;
    window.dispositionChart.options.scales.x.grid.color = colors.grid;
    window.dispositionChart.options.scales.y.ticks.color = colors.text;
    window.dispositionChart.options.plugins.legend.labels.color = colors.text;
    window.dispositionChart.update();
  } else {
    window.dispositionChart = new Chart(document.getElementById('dispositionChart'), {
      type: 'bar',
      data: {
        labels: dispositionSummary.map((entry) => entry.label),
        datasets: [{
          label: 'Players',
          data: dispositionSummary.map((entry) => entry.count),
          backgroundColor: '#8a8cff',
          borderRadius: 8,
        }],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            ticks: { color: colors.text },
            grid: { color: colors.grid },
            title: { display: true, text: 'Players', color: colors.text },
          },
          y: {
            ticks: { color: colors.text },
            grid: { display: false },
          },
        },
      },
    });
  }

  if (window.scatterChart) {
    window.scatterChart.data.datasets = [
      {
        label: 'Imperium',
        data: scatterPoints.filter((entry) => entry.group === 'Imperium').map((entry) => ({ x: entry.x, y: entry.y, label: entry.label })),
        backgroundColor: superfactionColors.Imperium,
      },
      {
        label: 'Chaos',
        data: scatterPoints.filter((entry) => entry.group === 'Chaos').map((entry) => ({ x: entry.x, y: entry.y, label: entry.label })),
        backgroundColor: superfactionColors.Chaos,
      },
      {
        label: 'Xenos',
        data: scatterPoints.filter((entry) => entry.group === 'Xenos').map((entry) => ({ x: entry.x, y: entry.y, label: entry.label })),
        backgroundColor: superfactionColors.Xenos,
      },
    ];
    window.scatterChart.options.plugins.legend.labels.color = colors.text;
    window.scatterChart.options.scales.x.ticks.color = colors.text;
    window.scatterChart.options.scales.x.grid.color = colors.grid;
    window.scatterChart.options.scales.x.title.color = colors.text;
    window.scatterChart.options.scales.y.ticks.color = colors.text;
    window.scatterChart.options.scales.y.grid.color = colors.grid;
    window.scatterChart.options.scales.y.title.color = colors.text;
    window.scatterChart.update();
  } else {
    window.scatterChart = new Chart(document.getElementById('scatterChart'), {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Imperium',
            data: scatterPoints.filter((entry) => entry.group === 'Imperium').map((entry) => ({ x: entry.x, y: entry.y, label: entry.label })),
            backgroundColor: superfactionColors.Imperium,
          },
          {
            label: 'Chaos',
            data: scatterPoints.filter((entry) => entry.group === 'Chaos').map((entry) => ({ x: entry.x, y: entry.y, label: entry.label })),
            backgroundColor: superfactionColors.Chaos,
          },
          {
            label: 'Xenos',
            data: scatterPoints.filter((entry) => entry.group === 'Xenos').map((entry) => ({ x: entry.x, y: entry.y, label: entry.label })),
            backgroundColor: superfactionColors.Xenos,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { color: colors.text } },
          tooltip: {
            callbacks: {
              label: (context) => `${context.raw.label}: ${context.raw.x} units, ${context.raw.y} char pts`,
            },
          },
        },
        scales: {
          x: {
            ticks: { color: colors.text },
            grid: { color: colors.grid },
            title: { display: true, text: 'Units', color: colors.text },
          },
          y: {
            ticks: { color: colors.text },
            grid: { color: colors.grid },
            title: { display: true, text: 'Character Points', color: colors.text },
          },
        },
      },
    });
  }
}

function refreshDashboard() {
  const filtered = getFilteredPlayers();
  renderSummary(filtered);
  renderTable(filtered);
  makeCompositionBars(filtered);
  updateCharts(filtered);
}

function bindEvents() {
  document.getElementById('searchInput').addEventListener('input', (event) => {
    state.search = event.target.value;
    refreshDashboard();
  });

  document.getElementById('superfactionFilter').addEventListener('change', (event) => {
    state.superfaction = event.target.value;
    refreshDashboard();
  });

  document.getElementById('factionFilter').addEventListener('change', (event) => {
    state.faction = event.target.value;
    refreshDashboard();
  });

  document.getElementById('dispositionFilter').addEventListener('change', (event) => {
    state.disposition = event.target.value;
    refreshDashboard();
  });

  themeToggleButton.addEventListener('click', () => {
    const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

const savedTheme = localStorage.getItem('dpw-theme') || 'dark';
applyTheme(savedTheme);
populateFilters();
bindEvents();
refreshDashboard();
