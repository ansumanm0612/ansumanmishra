(function () {
  "use strict";

  var toggle = document.querySelector(".search-toggle");
  var panel = document.getElementById("site-search-panel");
  var input = document.getElementById("site-search-input");
  var results = document.getElementById("site-search-results");
  var form = document.querySelector(".search-form");

  if (!toggle || !panel || !input || !results || !form) return;

  var searchIndex = [
    {
      title: "Linguist & Researcher",
      url: "index.html#home",
      summary: "Formal linguistics, computational approaches to language, semantics–pragmatics interface, Odia, Telugu and Hindi.",
      text: "linguist researcher formal linguistics computational approaches language semantics pragmatics interface South Asian languages Odia Telugu Hindi EFLU Master's Hyderabad"
    },
    {
      title: "Guide to This Site",
      url: "index.html#guide",
      summary: "An overview of the Home, About me, and Research & Projects pages.",
      text: "guide website academic journey research interests ongoing projects computational linguistics formal semantics background education research work thesis ideas"
    },
    {
      title: "About me",
      url: "about-me.html#about",
      summary: "Background, education, the move from science to linguistics, and interests outside research.",
      text: "Odisha Hyderabad 20 years science physics chemistry University of Hyderabad UoH Bachelor's Linguistics Master's Computational Linguistics EFLU syntax semantics pragmatics modality particles not-at-issue content cricket chess poetry philosophy Twitter X"
    },
    {
      title: "Presentations and Posters",
      url: "research.html#presentations",
      summary: "SCONLI-15, ICOLSI-47, YRCL-4, DiPSAL, SCONLI-16 and FASAL-16.",
      text: "presentations posters January 2025 November 2025 December 2025 January 2026 April 2026 Definiteness Maximality Odia jaka taka motion events Talmian Post-Talmian cognition Hele Information Structure focus particle Hindi Unconditionals Scalar-Correlative Strategy Best Poster Award Scalar Additive Madhya"
    },
    {
      title: "Word Sense Disambiguation in Odia",
      url: "research.html#word-sense-disambiguation",
      summary: "Research internship at the Indian Statistical Institute, Kolkata; Adapted Lesk and Naive Bayes classifiers.",
      text: "Word Sense Disambiguation Odia WSD Research Intern Indian Statistical Institute ISI Kolkata Adapted Lesk Naive Bayes lexical ambiguity 81.3% accuracy baseline"
    },
    {
      title: "Digital Repository of Hindi Morphology",
      url: "research.html#hindi-morphology",
      summary: "Project internship at CIIL, Mysore; morphology repository, speech data, MySQL and Python.",
      text: "Digital Repository Hindi Morphology Project Intern Central Institute of Indian Languages CIIL Mysore morphological features speech data storage retrieval MySQL Database Management Python"
    }
  ];

  function closeSearch() {
    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }

  function showMessage(message) {
    results.textContent = message;
  }

  function renderResults() {
    var query = input.value.toLowerCase().trim();
    results.textContent = "";

    if (!query) {
      showMessage("Search across pages, research, projects and presentations.");
      return;
    }

    var terms = query.split(/\s+/);
    var matches = searchIndex.map(function (item) {
      var source = (item.title + " " + item.summary + " " + item.text).toLowerCase();
      var score = terms.reduce(function (total, term) {
        return total + (source.indexOf(term) !== -1 ? 1 : 0);
      }, 0);
      return { item: item, score: score };
    }).filter(function (match) {
      return match.score > 0;
    }).sort(function (a, b) {
      return b.score - a.score;
    });

    if (!matches.length) {
      showMessage("No matching pages or information found.");
      return;
    }

    matches.slice(0, 7).forEach(function (match) {
      var link = document.createElement("a");
      var heading = document.createElement("strong");
      var summary = document.createElement("span");
      link.className = "search-result";
      link.href = match.item.url;
      heading.textContent = match.item.title;
      summary.textContent = match.item.summary;
      link.appendChild(heading);
      link.appendChild(summary);
      results.appendChild(link);
    });
  }

  toggle.addEventListener("click", function () {
    var opening = panel.hidden;
    panel.hidden = !opening;
    toggle.setAttribute("aria-expanded", String(opening));
    if (opening) {
      input.focus();
      renderResults();
    }
  });

  input.addEventListener("input", renderResults);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    renderResults();
    var firstResult = results.querySelector("a");
    if (firstResult) firstResult.focus();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !panel.hidden) {
      closeSearch();
      toggle.focus();
    }
  });

  document.addEventListener("click", function (event) {
    if (!panel.hidden && !panel.contains(event.target) && !toggle.contains(event.target)) {
      closeSearch();
    }
  });
})();