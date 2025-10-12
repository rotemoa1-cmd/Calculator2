/* Burnham Calculator App (SharePoint-friendly, ES5, external JS) */
(function(){
  'use strict';

  // Data inlined as JSON:
  var DEFAULT_DATA = [{"name": "Algae IC", "source": "Slater - GWT", "ts_min_pct": 3.2, "ts_max_pct": 3.2, "vs_over_ts": 0.69, "bmp_scf_per_lbVS": 1.85}, {"name": "Apple - Peels", "source": "Research", "ts_min_pct": 18.0, "ts_max_pct": 22.0, "vs_over_ts": 0.87, "bmp_scf_per_lbVS": 5.4}, {"name": "Apples  - Potatoes & Apples Mix ", "source": "Ovenall Farms (Lineage)", "ts_min_pct": 38.6, "ts_max_pct": 38.6, "vs_over_ts": 1.95, "bmp_scf_per_lbVS": 4.77}, {"name": "Apples - Apple Pomace", "source": "Research", "ts_min_pct": 12.0, "ts_max_pct": 15.0, "vs_over_ts": 0.95, "bmp_scf_per_lbVS": 6.0}, {"name": "Apples - Apple Pomace ", "source": "Ovenall Farms (TreeTop)", "ts_min_pct": 9.6, "ts_max_pct": 9.6, "vs_over_ts": 0.95, "bmp_scf_per_lbVS": 1.24}, {"name": "Apples - Flesh  ", "source": "Research", "ts_min_pct": 12.0, "ts_max_pct": 16.0, "vs_over_ts": 0.95, "bmp_scf_per_lbVS": 6.1}, {"name": "Corn - Potatoes & Peas & Corn Mix", "source": "Ovenall Farms (Lineage)", "ts_min_pct": 21.3, "ts_max_pct": 21.3, "vs_over_ts": 0.81, "bmp_scf_per_lbVS": 4.56}, {"name": "Dairy Products - Cheese Whey", "source": "Research", "ts_min_pct": 4.0, "ts_max_pct": 7.0, "vs_over_ts": 0.9, "bmp_scf_per_lbVS": 6.7}, {"name": "Dairy Products - Cream", "source": "Research", "ts_min_pct": 32.0, "ts_max_pct": 36.0, "vs_over_ts": 0.91, "bmp_scf_per_lbVS": 11.0}, {"name": "Dairy Products - Milk Processing Waste Water", "source": "Research", "ts_min_pct": 0.3, "ts_max_pct": 1.5, "vs_over_ts": 0.9, "bmp_scf_per_lbVS": 7.2}, {"name": "Dairy Products - Raw Milk", "source": "Research", "ts_min_pct": 12.5, "ts_max_pct": 13.2, "vs_over_ts": 0.92, "bmp_scf_per_lbVS": 8.2}, {"name": "Dairy Products - Whey Water", "source": " Penn Dairy A", "ts_min_pct": 9.3, "ts_max_pct": 9.3, "vs_over_ts": 0.84, "bmp_scf_per_lbVS": 6.69}, {"name": "Dairy Products - Whey Water", "source": "Penn Dairy B", "ts_min_pct": 8.0, "ts_max_pct": 8.0, "vs_over_ts": 0.84, "bmp_scf_per_lbVS": 7.29}, {"name": "Dairy Products - Whey Water", "source": "Belfonte Dairy", "ts_min_pct": 0.85, "ts_max_pct": 0.85, "vs_over_ts": 0.79, "bmp_scf_per_lbVS": 5.12}, {"name": "Depack Slurry", "source": "WM - EBSB1", "ts_min_pct": 6.1, "ts_max_pct": 6.1, "vs_over_ts": 0.93, "bmp_scf_per_lbVS": 6.74}, {"name": "Depack Slurry", "source": "WM - EBSB2", "ts_min_pct": 4.2, "ts_max_pct": 4.2, "vs_over_ts": 0.9, "bmp_scf_per_lbVS": 8.02}, {"name": "Depack Slurry", "source": "Shelby1", "ts_min_pct": 6.33, "ts_max_pct": 6.33, "vs_over_ts": 0.95, "bmp_scf_per_lbVS": 6.92}, {"name": "Depack Slurry", "source": "Shelby2", "ts_min_pct": 5.15, "ts_max_pct": 5.15, "vs_over_ts": 0.93, "bmp_scf_per_lbVS": 7.98}, {"name": "Depack Slurry", "source": "Shelby3", "ts_min_pct": 8.9, "ts_max_pct": 8.9, "vs_over_ts": 0.89, "bmp_scf_per_lbVS": 7.9}, {"name": "Depack Slurry", "source": "Research", "ts_min_pct": 10.0, "ts_max_pct": 15.0, "vs_over_ts": 0.95, "bmp_scf_per_lbVS": 7.8}, {"name": "Dog Food - Cooked Dog Food", "source": "Fresh Pet1", "ts_min_pct": 13.1, "ts_max_pct": 13.1, "vs_over_ts": 0.96, "bmp_scf_per_lbVS": 11.7}, {"name": "Dog Food - Cooked Dog Food", "source": "Fresh Pet2", "ts_min_pct": 8.7, "ts_max_pct": 8.7, "vs_over_ts": 0.91, "bmp_scf_per_lbVS": 10.11}, {"name": "Dog Food - Cooked Dog Food", "source": "Fresh Pet3", "ts_min_pct": 37.9, "ts_max_pct": 37.9, "vs_over_ts": 0.91, "bmp_scf_per_lbVS": 7.5}, {"name": "Dog Food - DAF Sludge", "source": "Post Holding1", "ts_min_pct": 4.3, "ts_max_pct": 4.3, "vs_over_ts": 0.65, "bmp_scf_per_lbVS": 1.008}, {"name": "Dog Food - DAF Sludge", "source": "Post Holding2", "ts_min_pct": 14.2, "ts_max_pct": 14.2, "vs_over_ts": 2.2, "bmp_scf_per_lbVS": 0.76}, {"name": "Dog Food - Raw Dog Food", "source": "Fresh Pet", "ts_min_pct": 28.5, "ts_max_pct": 28.5, "vs_over_ts": 0.89, "bmp_scf_per_lbVS": 9.95}, {"name": "Ethanol - CDS", "source": "Arkalon", "ts_min_pct": 60.3, "ts_max_pct": 60.3, "vs_over_ts": 0.95, "bmp_scf_per_lbVS": 3.32}, {"name": "Ethanol - CDS", "source": "Bonanza", "ts_min_pct": 45.4, "ts_max_pct": 45.4, "vs_over_ts": 0.92, "bmp_scf_per_lbVS": 5.83}, {"name": "Ethanol - CDS", "source": "BioUrja", "ts_min_pct": 45.4, "ts_max_pct": 45.4, "vs_over_ts": 0.89, "bmp_scf_per_lbVS": 5.55}, {"name": "Ethanol - CDS", "source": "CHS", "ts_min_pct": 35.3, "ts_max_pct": 35.3, "vs_over_ts": 0.89, "bmp_scf_per_lbVS": 7.88}, {"name": "Ethanol - CDS", "source": "WPE", "ts_min_pct": 24.2, "ts_max_pct": 24.2, "vs_over_ts": 0.84, "bmp_scf_per_lbVS": 8.23}, {"name": "Ethanol - CDS", "source": "PGP", "ts_min_pct": 21.3, "ts_max_pct": 21.3, "vs_over_ts": 0.84, "bmp_scf_per_lbVS": 5.04}, {"name": "Ethanol - CDS", "source": "The Andersons", "ts_min_pct": 31.6, "ts_max_pct": 31.6, "vs_over_ts": 0.82, "bmp_scf_per_lbVS": 7.94}, {"name": "Ethanol - Thin Stillage", "source": "Arkalon", "ts_min_pct": 7.6, "ts_max_pct": 7.6, "vs_over_ts": 0.91, "bmp_scf_per_lbVS": 8.79}, {"name": "Ethanol - Thin Stillage", "source": "Bonanza", "ts_min_pct": 8.4, "ts_max_pct": 8.4, "vs_over_ts": 0.89, "bmp_scf_per_lbVS": 10.98}, {"name": "Ethanol - Thin Stillage", "source": "CHS", "ts_min_pct": 8.1, "ts_max_pct": 8.1, "vs_over_ts": 0.89, "bmp_scf_per_lbVS": 9.26}, {"name": "Ethanol - Thin Stillage", "source": "WPE", "ts_min_pct": 6.0, "ts_max_pct": 6.0, "vs_over_ts": 0.87, "bmp_scf_per_lbVS": 10.01}, {"name": "Ethanol - Thin Stillage", "source": "PGP", "ts_min_pct": 7.1, "ts_max_pct": 7.1, "vs_over_ts": 0.855, "bmp_scf_per_lbVS": 8.67}, {"name": "Ethanol - Thin Stillage", "source": "The Andersons", "ts_min_pct": 7.1, "ts_max_pct": 7.1, "vs_over_ts": 0.871, "bmp_scf_per_lbVS": 10.23}, {"name": "Ethanol - Wastewater", "source": "BioUrja", "ts_min_pct": 0.2, "ts_max_pct": 0.2, "vs_over_ts": 0.5, "bmp_scf_per_lbVS": 9.91}, {"name": "Ethanol - Whole Stillage (Rye) ", "source": "Alberta Distillers Limited", "ts_min_pct": 8.3, "ts_max_pct": 8.3, "vs_over_ts": 0.95, "bmp_scf_per_lbVS": 5.71}, {"name": "Ethanol - Whole Stillage (Wheat) ", "source": "Alberta Distillers Limited", "ts_min_pct": 9.9, "ts_max_pct": 9.9, "vs_over_ts": 0.95, "bmp_scf_per_lbVS": 6.3}, {"name": "FOG ", "source": "GPSD", "ts_min_pct": 1.4, "ts_max_pct": 1.4, "vs_over_ts": 0.71, "bmp_scf_per_lbVS": 6.17}, {"name": "Food Supplaments - Starch Piles", "source": "Ingredion ", "ts_min_pct": 55.7, "ts_max_pct": 55.7, "vs_over_ts": 0.79, "bmp_scf_per_lbVS": 4.71}, {"name": "Grains - Malting MBR Sludge", "source": "CMC - Canada Malting Co", "ts_min_pct": 0.2, "ts_max_pct": 0.2, "vs_over_ts": 0.51, "bmp_scf_per_lbVS": 5.2}, {"name": "Grapes - Grape Juice", "source": "Research", "ts_min_pct": 10.0, "ts_max_pct": 18.0, "vs_over_ts": 0.97, "bmp_scf_per_lbVS": 15.0}, {"name": "Grapes - Pomace", "source": "Research", "ts_min_pct": 25.0, "ts_max_pct": 35.0, "vs_over_ts": 0.8, "bmp_scf_per_lbVS": 8.1}, {"name": "Grapes - Whole Grapes", "source": "Research", "ts_min_pct": 18.0, "ts_max_pct": 20.0, "vs_over_ts": 0.93, "bmp_scf_per_lbVS": 14.0}, {"name": "Hershey Creamery Tank 0821", "source": "Hershey Creamery", "ts_min_pct": 24.78, "ts_max_pct": 24.78, "vs_over_ts": 0.98, "bmp_scf_per_lbVS": 7.03}, {"name": "Hershey Creamery Tank 0823", "source": "Hershey Creamery", "ts_min_pct": 34.52, "ts_max_pct": 34.52, "vs_over_ts": 0.97, "bmp_scf_per_lbVS": 7.33}, {"name": "Lantic #1 PCC 1 Year", "source": "Lantic", "ts_min_pct": 66.6, "ts_max_pct": 66.6, "vs_over_ts": 0.07, "bmp_scf_per_lbVS": 0.08}, {"name": "Lantic #4 Tailings", "source": "Lantic", "ts_min_pct": 15.7, "ts_max_pct": 15.7, "vs_over_ts": 0.85, "bmp_scf_per_lbVS": 3.56}, {"name": "Lantic #5 Press Pulp", "source": "Lantic", "ts_min_pct": 29.5, "ts_max_pct": 29.5, "vs_over_ts": 0.93, "bmp_scf_per_lbVS": 5.09}, {"name": "Manure - Dairy Manure  - Raw", "source": "Ovenall Farms", "ts_min_pct": 2.8, "ts_max_pct": 2.8, "vs_over_ts": 0.71, "bmp_scf_per_lbVS": 3.98}, {"name": "Manure - Feedlot Manure", "source": "Ovenall Farms", "ts_min_pct": 31.6, "ts_max_pct": 31.6, "vs_over_ts": 0.52, "bmp_scf_per_lbVS": 1.57}, {"name": "Manure - Feedlot Manure - Fresh", "source": "Ovenall Farms", "ts_min_pct": 18.2, "ts_max_pct": 18.2, "vs_over_ts": 0.82, "bmp_scf_per_lbVS": 3.73}, {"name": "Meat Rendering -  Emulsion", "source": "Kaluzni Bros", "ts_min_pct": 34.7, "ts_max_pct": 34.7, "vs_over_ts": 0.98, "bmp_scf_per_lbVS": 12.87}, {"name": "Meat Rendering - Hatchery (poultry) waste", "source": "IWR - Innovative Waste Recycling", "ts_min_pct": 56.6, "ts_max_pct": 56.6, "vs_over_ts": 0.28, "bmp_scf_per_lbVS": 6.43}, {"name": "Noodles -  Screening", "source": "ConAgra", "ts_min_pct": 20.8, "ts_max_pct": 20.8, "vs_over_ts": 0.99, "bmp_scf_per_lbVS": 6.51}, {"name": "Onions - Waste", "source": "Boardman Foods", "ts_min_pct": 5.2, "ts_max_pct": 5.2, "vs_over_ts": 0.87, "bmp_scf_per_lbVS": 5.7}, {"name": "Peas - Potatoes & Peas & Corn Mix", "source": "Ovenall Farms (Lineage)", "ts_min_pct": 21.3, "ts_max_pct": 21.3, "vs_over_ts": 0.81, "bmp_scf_per_lbVS": 4.56}, {"name": "Potatoes  - Potatoes & Apples Mix ", "source": "Ovenall Farms (Lineage)", "ts_min_pct": 38.6, "ts_max_pct": 38.6, "vs_over_ts": 0.95, "bmp_scf_per_lbVS": 4.77}, {"name": "Potatoes - Chips Activated Sludge", "source": "Axium", "ts_min_pct": 1.85, "ts_max_pct": 1.85, "vs_over_ts": 0.4, "bmp_scf_per_lbVS": 1.44}, {"name": "Potatoes - Chips DAF Sludge ", "source": "Axium", "ts_min_pct": 3.52, "ts_max_pct": 3.52, "vs_over_ts": 0.84, "bmp_scf_per_lbVS": 7.83}, {"name": "Potatoes - Fries ", "source": "Lineage (WA)", "ts_min_pct": 29.0, "ts_max_pct": 29.0, "vs_over_ts": 0.972, "bmp_scf_per_lbVS": 6.02}, {"name": "Potatoes - Mashed ", "source": "Research", "ts_min_pct": 16.0, "ts_max_pct": 20.0, "vs_over_ts": 0.93, "bmp_scf_per_lbVS": 5.4}, {"name": "Potatoes - Mashed ", "source": "Idaho Biomass", "ts_min_pct": 24.63, "ts_max_pct": 24.63, "vs_over_ts": 0.95, "bmp_scf_per_lbVS": 3.93}, {"name": "Potatoes - Peels ", "source": "Research", "ts_min_pct": 18.0, "ts_max_pct": 25.0, "vs_over_ts": 0.93, "bmp_scf_per_lbVS": 3.5}, {"name": "Potatoes - Peels ", "source": "Idaho Biomass", "ts_min_pct": 9.45, "ts_max_pct": 9.45, "vs_over_ts": 0.85, "bmp_scf_per_lbVS": 3.77}, {"name": "Potatoes - Potatoes & Peas & Corn Mix", "source": "Ovenall Farms (Lineage)", "ts_min_pct": 21.3, "ts_max_pct": 21.3, "vs_over_ts": 0.81, "bmp_scf_per_lbVS": 4.56}, {"name": "Potatoes - Sludge Cake", "source": "Idaho Biomass", "ts_min_pct": 12.61, "ts_max_pct": 12.61, "vs_over_ts": 0.94, "bmp_scf_per_lbVS": 5.47}, {"name": "Potatoes - Whole", "source": "Research", "ts_min_pct": 18.0, "ts_max_pct": 22.0, "vs_over_ts": 0.93, "bmp_scf_per_lbVS": 6.0}, {"name": "Primary Sludge - Raw", "source": "GPSD", "ts_min_pct": 3.8, "ts_max_pct": 3.8, "vs_over_ts": 0.82, "bmp_scf_per_lbVS": 4.75}, {"name": "Primary Sludge - Raw", "source": "GPSD", "ts_min_pct": 3.6, "ts_max_pct": 3.6, "vs_over_ts": 0.81, "bmp_scf_per_lbVS": 4.15}, {"name": "Primary Sludge - Thickenned", "source": "Lockhaven", "ts_min_pct": 20.8, "ts_max_pct": 20.8, "vs_over_ts": 0.67, "bmp_scf_per_lbVS": 1.079}, {"name": "Primary Sludge - Thickenned", "source": "Lockhaven", "ts_min_pct": 21.1, "ts_max_pct": 21.1, "vs_over_ts": 0.67, "bmp_scf_per_lbVS": 1.27}, {"name": "Pumpkin  - Pumpkin Slurry", "source": "Libby's - Grocery Store", "ts_min_pct": 7.6, "ts_max_pct": 7.6, "vs_over_ts": 0.91, "bmp_scf_per_lbVS": 5.2}, {"name": "Sugar Water - Italian Ice", "source": "Mia Product (Green)", "ts_min_pct": 2.0, "ts_max_pct": 2.0, "vs_over_ts": 0.85, "bmp_scf_per_lbVS": 16.44}, {"name": "Toothpaste", "source": "Omega", "ts_min_pct": 80.5, "ts_max_pct": 80.5, "vs_over_ts": 0.74, "bmp_scf_per_lbVS": 2.04}, {"name": "Waste Water", "source": "Quality Liquid Feeds", "ts_min_pct": 56.9, "ts_max_pct": 56.9, "vs_over_ts": 0.64, "bmp_scf_per_lbVS": 8.66}, {"name": "Winery - Waste Water", "source": "Research", "ts_min_pct": 0.5, "ts_max_pct": 2.5, "vs_over_ts": 0.8, "bmp_scf_per_lbVS": 12.0}, {"name": "Winery - Waste Water", "source": "Coventry Vale Winery", "ts_min_pct": 1.2, "ts_max_pct": 1.2, "vs_over_ts": 0.5, "bmp_scf_per_lbVS": 4.0}, {"name": "Yeast Production - First Pass Beer", "source": "AB Mauri", "ts_min_pct": 4.2, "ts_max_pct": 4.2, "vs_over_ts": 0.61, "bmp_scf_per_lbVS": 5.33}];
  var FEEDS = JSON.parse(JSON.stringify(DEFAULT_DATA));

  function fmt(x, n){ if (!isFinite(x)) return "0.00"; return Number(x).toFixed(typeof n==='number'?n:2); }
  var MMBTU_PER_SCF = 0.001012;

  function computeMMBtuPerTon(rec, tsPct){
    var TS = tsPct/100.0;
    var VS = rec.vs_over_ts || 0;
    var BMP = rec.bmp_scf_per_lbVS || 0;
    return BMP * (TS * VS * 2000) * MMBTU_PER_SCF;
  }
  function uniqueNames(){
    var map = {}; var out = [];
    for (var i=0;i<FEEDS.length;i++){ var nm = FEEDS[i].name; if(map[nm]) continue; map[nm]=1; out.push(nm); }
    return out;
  }
  function sourcesForName(name){
    var map = {}; var out = [];
    for (var i=0;i<FEEDS.length;i++){ var f=FEEDS[i]; if (f.name===name && !map[f.source]){ map[f.source]=1; out.push(f.source);} }
    return out;
  }
  function getRecord(name, source){
    for (var i=0;i<FEEDS.length;i++){ var f=FEEDS[i]; if (f.name===name && f.source===source) return f; }
    return FEEDS[0];
  }
  function clamp(v, lo, hi){ return Math.max(lo, Math.min(hi, v)); }

  var cards = [
    { typeId:'type_0', sourceId:'source_0', tonsId:'tons_0', tsSliderId:'ts_slider_0', tsInputId:'ts_input_0', tsRangeLabelId:'ts_range_0' },
    { typeId:'type_1', sourceId:'source_1', tonsId:'tons_1', tsSliderId:'ts_slider_1', tsInputId:'ts_input_1', tsRangeLabelId:'ts_range_1' },
    { typeId:'type_2', sourceId:'source_2', tonsId:'tons_2', tsSliderId:'ts_slider_2', tsInputId:'ts_input_2', tsRangeLabelId:'ts_range_2' },
    { typeId:'type_3', sourceId:'source_3', tonsId:'tons_3', tsSliderId:'ts_slider_3', tsInputId:'ts_input_3', tsRangeLabelId:'ts_range_3' }
  ];

  function populateTypes(selectEl){
    if (!selectEl) return;
    selectEl.innerHTML = '';
    var names = uniqueNames();
    for (var i=0;i<names.length;i++){
      var opt = document.createElement('option');
      opt.value = names[i]; opt.appendChild(document.createTextNode(names[i]));
      selectEl.appendChild(opt);
    }
    if (names.length>0) selectEl.value = names[0];
  }
  function populateSources(selectEl, name){
    if (!selectEl) return;
    selectEl.innerHTML = '';
    var srcs = sourcesForName(name);
    for (var i=0;i<srcs.length;i++){
      var opt = document.createElement('option');
      opt.value = srcs[i]; opt.appendChild(document.createTextNode(srcs[i]));
      selectEl.appendChild(opt);
    }
    if (srcs.length>0) selectEl.value = srcs[0];
  }
  function setTSBounds(cfg, rec){
    var slider = document.getElementById(cfg.tsSliderId);
    var input = document.getElementById(cfg.tsInputId);
    if (!slider || !input) return;
    var lo = Number(rec.ts_min_pct || 0);
    var hi = Number(rec.ts_max_pct || 0);
    slider.min = lo; slider.max = hi;
    input.min = lo; input.max = hi;
    var v = clamp(Number(input.value || lo), lo, hi);
    slider.value = v; input.value = Number(v).toFixed(2);
    var lbl = document.getElementById(cfg.tsRangeLabelId);
    if (lbl) lbl.textContent = "Allowed: " + fmt(lo,2) + "–" + fmt(hi,2) + "%";
  }

  function recalc(){
    var totalTons=0, totalTS_tons=0, totalMMBtuDay=0, selectedCount=0;
    var tbody = document.querySelector('#detailTable tbody');
    if (tbody) tbody.innerHTML = '';

    for (var c=0;c<cards.length;c++){
      var cfg = cards[c];
      var typeSel = document.getElementById(cfg.typeId);
      var sourceSel = document.getElementById(cfg.sourceId);
      var tonsEl = document.getElementById(cfg.tonsId);
      var tsIn = document.getElementById(cfg.tsInputId);
      if (!typeSel || !sourceSel || !tonsEl || !tsIn) continue;

      var name = typeSel.value;
      var source = sourceSel.value;
      var rec = getRecord(name, source);
      var tons = parseFloat(tonsEl.value || '0');
      var tsPct = parseFloat(tsIn.value || '0');

      if (tons > 0) selectedCount += 1;

      var mmbtuPerTon = computeMMBtuPerTon(rec, tsPct);
      var mmbtuDay = mmbtuPerTon * tons;

      totalTons += tons;
      totalTS_tons += tons * (tsPct/100.0);
      totalMMBtuDay += mmbtuDay;

      if (tbody){
        var tr = document.createElement('tr');
        tr.innerHTML = "<td>" + rec.name + "</td>"
          + "<td>" + rec.source + "</td>"
          + "<td>" + fmt(tsPct,2) + "%</td>"
          + "<td>" + fmt(rec.vs_over_ts,2) + "</td>"
          + "<td>" + fmt(rec.bmp_scf_per_lbVS,2) + "</td>"
          + "<td>" + fmt(mmbtuPerTon,3) + "</td>"
          + "<td>" + fmt(mmbtuDay,3) + "</td>";
        tbody.appendChild(tr);
      }
    }

    var blendTS = totalTons > 0 ? (100.0 * totalTS_tons / totalTons) : 0;
    var blendMMBtuPerTon = totalTons > 0 ? (totalMMBtuDay / totalTons) : 0;

    var tf = document.getElementById('totalFlow'); if (tf) tf.textContent = fmt(totalTons,2);
    var bts = document.getElementById('blendTS'); if (bts) bts.textContent = fmt(blendTS,2) + '%';
    var bmt = document.getElementById('blendMMBtuPerTon'); if (bmt) bmt.textContent = fmt(blendMMBtuPerTon,3);
    var tmd = document.getElementById('totalMMBtuPerDay'); if (tmd) tmd.textContent = fmt(totalMMBtuDay,3);
    var cp = document.getElementById('countPill'); if (cp) cp.textContent = selectedCount + " of " + cards.length + " selected";
  }

  function wireCard(cfg){
    var typeSel = document.getElementById(cfg.typeId);
    var sourceSel = document.getElementById(cfg.sourceId);
    var slider = document.getElementById(cfg.tsSliderId);
    var input = document.getElementById(cfg.tsInputId);
    var tons = document.getElementById(cfg.tonsId);
    if (!typeSel || !sourceSel || !slider || !input || !tons) return;

    function onTypeChange(){ populateSources(sourceSel, typeSel.value); onSourceChange(); }
    function onSourceChange(){ var rec = getRecord(typeSel.value, sourceSel.value); setTSBounds(cfg, rec); recalc(); }
    function onSlider(){ input.value = Number(slider.value).toFixed(2); recalc(); }
    function onInput(){
      var rec = getRecord(typeSel.value, sourceSel.value);
      var lo = Number(rec.ts_min_pct || 0);
      var hi = Number(rec.ts_max_pct || 0);
      var v = clamp(Number(input.value || lo), lo, hi);
      input.value = Number(v).toFixed(2);
      slider.value = v;
      recalc();
    }

    typeSel.addEventListener('input', onTypeChange);
    sourceSel.addEventListener('input', onSourceChange);
    slider.addEventListener('input', onSlider);
    input.addEventListener('input', onInput);
    tons.addEventListener('input', recalc);

    populateTypes(typeSel);
    populateSources(sourceSel, typeSel.value);
    onSourceChange();
  }

  function start(){
    for (var i=0;i<cards.length;i++){ wireCard(cards[i]); }
    recalc();
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();