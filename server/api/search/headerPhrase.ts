export default eventHandler(async (event) => {
    return [
        {text: 'Архитектура ПО', url: '/training/katalog_kursov/arkhitektura-po/'},
        {text: 'Java', url: '/training/katalog_kursov/razrabotka_po_java/'},
        {text: 'Web', url: '/training/katalog_kursov/razrabotka_po_web/'},
        {text: '.Net', url: '/training/katalog_kursov/razrabotka_po_net/'},
        {text: 'QA Automation', url: '/training/katalog_kursov/avtomatizirovannoe-i-nagruzochnoe-testirovanie/'},
        {text: 'Big Data', url: '/training/katalog_kursov/sovremennye-metody-upravleniya-dannymi-bigdata-ml/'},
        {text: 'Бизнес-анализ', url: '/training/katalog_kursov/biznes-analiz/'},
        {text: 'Системный анализ', url: '/training/katalog_kursov/sistemnyy-analiz/'},
        {text: 'UML', url: '/search/?q=UML'},
        {text: 'UML', url: '/search/?q=BPMN'},
    ]
})
