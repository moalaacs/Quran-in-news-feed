const ayat = [
  {
    ayah: "{وَلَوْ أَنَّهُمْ آمَنُوا وَاتَّقَوْا لَمَثُوبَةٌ مِنْ عِنْدِ اللَّهِ خَيْرٌ ۖ لَوْ كَانُوا يَعْلَمُونَ}",
    surah: "",
  },
  {
    ayah: "{وَلَا تَقُولَنَّ لِشَيْءٍ إِنِّي فَاعِلٌ ذَلِكَ غَدًا * إِلَّا أَنْ يَشَاءَ اللَّهُ وَاذْكُرْ رَبَّكَ إِذَا نَسِيتَ وَقُلْ عَسَى أَنْ يَهْدِيَنِ رَبِّي لِأَقْرَبَ مِنْ هَذَا رَشَدًا}",
    surah: "",
  },
  {
    ayah: "{وَقُلِ الْحَمْدُ لِلَّهِ الَّذِي لَمْ يَتَّخِذْ وَلَدًا وَلَمْ يَكُنْ لَهُ شَرِيكٌ فِي الْمُلْكِ وَلَمْ يَكُنْ لَهُ وَلِيٌّ مِنَ الذُّلِّ وَكَبِّرْهُ تَكْبِيرًا}",
    surah: "",
  },
  {
    ayah: "{إِنَّ الصَّلَاةَ تَنْهَى عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ وَلَذِكْرُ اللَّهِ أَكْبَرُ وَاللَّهُ يَعْلَمُ مَا تَصْنَعُونَ}",
    surah: "",
  },
  {
    ayah: "{وَأَنْفِقُوا فِي سَبِيلِ اللَّهِ وَلَا تُلْقُوا بِأَيْدِيكُمْ إِلَى التَّهْلُكَةِ وَأَحْسِنُوا إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ}",
    surah: "",
  },
  {
    ayah: "{فَاصْبِرْ كَمَا صَبَرَ أُولُو الْعَزْمِ مِنَ الرُّسُلِ وَلَا تَسْتَعْجِل لَّهُمْ ۚ}",
    surah: "",
  },
  {
    ayah: "{فَاصْبِرْ لِحُكْمِ رَبِّكَ وَلَا تَكُن كَصَاحِبِ الْحُوتِ إِذْ نَادَىٰ وَهُوَ مَكْظُومٌ}",
    surah: "",
  },
  {
    ayah: "{فَاصْبِرْ صَبْرًا جَمِيلًا}",
    surah: "",
  },
  {
    ayah: "{يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَابِطُوا وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ}",
    surah: "",
  },
  {
    ayah: "{وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَمَا تُقَدِّمُوا لِأَنْفُسِكُمْ مِنْ خَيْرٍ تَجِدُوهُ عِنْدَ اللَّهِ إِنَّ اللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌ}",
    surah: "",
  },
  {
    ayah: "{وَالَّذِينَ صَبَرُوا ابْتِغَاءَ وَجْهِ رَبِّهِمْ وَأَقَامُوا الصَّلَاةَ وَأَنْفَقُوا مِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلَانِيَةً وَيَدْرَءُونَ بِالْحَسَنَةِ السَّيِّئَةَ أُولَئِكَ لَهُمْ عُقْبَى الدَّارِ }",
    surah: "",
  },
  {
    ayah: "{قُلْ لِعِبَادِيَ الَّذِينَ آمَنُوا يُقِيمُوا الصَّلَاةَ وَيُنْفِقُوا مِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلَانِيَةً مِنْ قَبْلِ أَنْ يَأْتِيَ يَوْمٌ لَا بَيْعٌ فِيهِ وَلَا خِلَالٌ}",
    surah: "",
  },
  {
    ayah: "{وَالَّذِينَ يُمَسِّكُونَ بِالْكِتَابِ وَأَقَامُوا الصَّلَاةَ إِنَّا لَا نُضِيعُ أَجْرَ الْمُصْلِحِينَ}",
    surah: "",
  },
  {
    ayah: "{إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَأَقَامَ الصَّلَاةَ وَآتَى الزَّكَاةَ وَلَمْ يَخْشَ إِلَّا اللَّهَ فَعَسَى أُولَئِكَ أَنْ يَكُونُوا مِنَ الْمُهْتَدِينَ}",
    surah: "",
  },
  {
    ayah: "{وَمَنْ يُطِعِ اللَّهَ وَرَسُولَهُ وَيَخْشَ اللَّهَ وَيَتَّقْهِ فَأُولَئِكَ هُمُ الْفَائِزُونَ}",
    surah: "",
  },
  {
    ayah: "{ثُمَّ نُنَجِّي الَّذِينَ اتَّقَوْا وَنَذَرُ الظَّالِمِينَ فِيهَا جِثِيًّا}",
    surah: "",
  },
  {
    ayah: "{وَتَوَكَّلْ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ وَسَبِّحْ بِحَمْدِهِ وَكَفَى بِهِ بِذُنُوبِ عِبَادِهِ خَبِيرًا}",
    surah: "",
  },
  {
    ayah: "{وَهُوَ الَّذِي جَعَلَ اللَّيْلَ وَالنَّهَارَ خِلْفَةً لِمَنْ أَرَادَ أَنْ يَذَّكَّرَ أَوْ أَرَادَ شُكُورًا}",
    surah: "",
  },
  {
    ayah: "{ادْخُلُوا الْجَنَّةَ بِمَا كُنْتُمْ تَعْمَلُونَ}",
    surah: "",
  },
  {
    ayah: "{فَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ * وَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ}",
    surah: "",
  },
  {
    ayah: "{وَإِنِّي لَغَفَّارٌ لِّمَن تَابَ وَآمَنَ وَعَمِلَ صَالِحًا ثُمَّ اهْتَدَى}",
    surah: "",
  },
  {
    ayah: "{فَإِن تَوَلَّوْا فَقُلْ حَسْبِيَ اللَّهُ لا إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ}",
    surah: "",
  },
  {
    ayah: "{أَمَّن يُجِيبُ الْمُضْطَرَّ إِذَا دَعَاهُ وَيَكْشِفُ السُّوءَ وَيَجْعَلُكُمْ خُلَفَاء الأَرْضِ أَإِلَهٌ مَّعَ اللَّهِ قَلِيلا مَّا تَذَكَّرُونَ}",
    surah: "",
  },
  {
    ayah: "{وَلَقَدْ نَعْلَمُ أَنَّكَ يَضِيقُ صَدْرُكَ بِمَا يَقُولُونَ فَسَبِّحْ بِحَمْدِ رَبِّكَ وَكُن مِّنَ السَّاجِدِينَ وَاعْبُدْ رَبَّكَ حَتَّى يَأْتِيَكَ الْيَقِينُ}",
    surah: "",
  },
  {
    ayah: "{فَاصْبِرْ عَلَى مَا يَقُولُونَ وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوعِ الشَّمْسِ وَقَبْلَ غُرُوبِهَا وَمِنْ آنَاءِ اللَّيْلِ فَسَبِّحْ وَأَطْرَافَ النَّهَارِ لَعَلَّكَ تَرْضَى}",
    surah: "",
  },
  {
    ayah: "{قُلِ اللَّهُمَّ مَالِكَ الْمُلْك تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ وَتُعِزُّ مَنْ تَشَاءُ وَتُذِلُّ مَنْ تَشَاءُ}",
    surah: "",
  },
  {
    ayah: "{أَحَسِبَ النَّاسُ أَنْ يُتْرَكُوا أَنْ يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ}",
    surah: "",
  },
  {
    ayah: "{مَثَلُ الَّذِينَ اتَّخَذُوا مِنْ دُونِ اللَّهِ أَوْلِيَاءَ كَمَثَلِ الْعَنْكَبُوتِ اتَّخَذَتْ بَيْتًا وَإِنَّ أَوْهَنَ الْبُيُوتِ لَبَيْتُ الْعَنْكَبُوتِ لَوْ كَانُوا يَعْلَمُونَ}",
    surah: "",
  },
  {
    ayah: "{ذَلِكَ وَمَنْ يُعَظِّمْ شَعَائِرَ اللَّهِ فَإِنَّهَا مِنْ تَقْوَى الْقُلُوبِ}",
    surah: "",
  },
  {
    ayah: "{ادْعُوا رَبَّكُمْ تَضَرُّعًا وَخُفْيَةً إِنَّهُ لَا يُحِبُّ الْمُعْتَدِينَ}",
    surah: "",
  },
  {
    ayah: "{الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُمْ بِذِكْرِ اللَّهِ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ}",
    surah: "",
  },
  {
    ayah: "{وَاذْكُرِ اسْمَ رَبِّكَ وَتَبَتَّلْ إِلَيْهِ تَبْتِيلًا }",
    surah: "",
  },
  {
    ayah: "{إِنَّهُ مَن يَتَّقِ وَيِصْبِرْ فَإِنَّ اللّهَ لاَ يُضِيعُ أَجْرَ الْمُحْسِنِينَ}",
    surah: "",
  },
  {
    ayah: "{إِنِّي جَزَيْتُهُمُ الْيَوْمَ بِمَا صَبَرُوا أَنَّهُمْ هُمُ الْفَائِزُونَ}",
    surah: "",
  },
  {
    ayah: "{أُولَئِكَ يُجْزَوْنَ الْغُرْفَةَ بِمَا صَبَرُوا وَيُلَقَّوْنَ فِيهَا تَحِيَّةً وَسَلَامًا}",
    surah: "",
  },
  {
    ayah: "{أُولَئِكَ يُؤْتَوْنَ أَجْرَهُمْ مَرَّتَيْنِ بِمَا صَبَرُوا وَيَدْرَؤُونَ بِالْحَسَنَةِ السَّيِّئَةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ}",
    surah: "",
  },
  {
    ayah: "{وَقَالَ الَّذِينَ أُوتُوا الْعِلْمَ وَيْلَكُمْ ثَوَابُ اللَّهِ خَيْرٌ لِمَنْ آمَنَ وَعَمِلَ صَالِحًا وَلَا يُلَقَّاهَا إِلَّا الصَّابِرُونَ}",
    surah: "",
  },
  {
    ayah: "{يَعِظُكُمُ اللَّهُ أَنْ تَعُودُوا لِمِثْلِهِ أَبَدًا}",
    surah: "",
  },
];

//Send message to popup to show the extension in target tab
chrome.runtime.sendMessage({ todo: "showPageAction" });

const theme = document.querySelector("#facebook");
const feed = document.querySelector("[role='feed']");

function clearFeed() {
  feed.style.display = "none";
}

function setAyah() {
  clearFeed();
  const randomNumber = Math.floor(Math.random() * ayat.length);
  const targetObject = ayat[randomNumber];
  const targetAyah = targetObject.ayah;
  //Create ayah
  const ayahContainer = document.createElement("div");
  const ayah = document.createElement("h1");
  ayah.innerText = targetAyah;
  ayah.style.fontSize = "25px";
  //Append ayah to feed
  ayahContainer.appendChild(ayah);
  ayahContainer.classList.add("ayah-container");
  ayahContainer.style.textAlign = "center";
  ayahContainer.style.marginTop = "60px";
  feed.parentNode.insertBefore(ayahContainer, feed.nextSibling);

  // Change ayah color depending on theme
  if (theme.classList.contains("__fb-dark-mode")) {
    ayah.style.color = "white";
  } else {
    ayah.style.color = "black";
  }
}

function restoreFeed() {
  feed.style.display = "block";
  const ayahContainer = document.querySelector(".ayah-container");
  ayahContainer.style.display = "none";
}

chrome.storage.sync.get("state", function (storage) {
  if (storage.state == "start") {
    setAyah();
  } else {
    restoreFeed();
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.todo == "start") {
    setAyah();
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.todo == "end") {
    restoreFeed();
  }
});
