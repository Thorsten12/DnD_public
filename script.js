const images = document.querySelectorAll('.img-wrapper img');
const container = document.querySelector('.flex-container');
const background = document.querySelector('.background');

const bookText = document.querySelector('.header-text.book');
const writerText = document.querySelector('.header-text.writer');

const imageGridContainer = document.getElementById('image-grid-container');
const speechBubble = document.getElementById('writer-speech-bubble');

// Ursprüngliche Bildquellen merken
const originalSrc = [];
images.forEach(img => originalSrc.push(img.src));

images.forEach((img, index) => {
    img.addEventListener('click', function() {
        const wrapper = this.parentElement;

        // Bereits aktiv → zurücksetzen
        if (wrapper.classList.contains('active')) {
            images.forEach((i, idx) => {
                i.classList.remove('active', 'hidden');
                i.parentElement.classList.remove('active');
                i.src = originalSrc[idx];
            });
            container.classList.remove('has-active');
            background.classList.remove('active');

            bookText.style.opacity = 0;
            writerText.style.opacity = 0;
            bookText.classList.remove('active');
            
            // Grid-Container deaktivieren
            if (imageGridContainer) {
                imageGridContainer.classList.remove('active');
            }
            // Sprechblase verstecken
            if (speechBubble) {
                speechBubble.classList.remove('show');
            }
        }
        else {
            // Aktivieren
            container.classList.add('has-active');
            background.classList.add('active');

            images.forEach((i, idx) => {
                const w = i.parentElement;
                if (i === img) {
                    i.classList.add('active');
                    i.classList.remove('hidden');
                    w.classList.add('active');

                    if (idx === 1) i.src = 'Schreiber_look.png';
                } else {
                    i.classList.add('hidden');
                    i.classList.remove('active');
                    w.classList.remove('active');
                    i.src = originalSrc[idx];
                }
            });

            // Logik zur Steuerung der Textelemente
            if (index === 0) {
                bookText.style.opacity = 1;
                writerText.style.opacity = 0;
                bookText.classList.add('active');
            } else {
                bookText.style.opacity = 0;
                writerText.style.opacity = 1;
                bookText.classList.remove('active');
            }
            
            // Grid-Container aktivieren/deaktivieren
            if (imageGridContainer) {
                if (index === 1) {
                    imageGridContainer.classList.add('active');
                } else {
                    imageGridContainer.classList.remove('active');
                }
            }
        }
    });
});

const bookTexts = [

`<h2 class="book-heading">Die Ära des Essenz-Blutes: Aufzeichnungen eines Wanderers in Vaelmora</h2>

<p>Ich bin in das Fürstenreich Vaelmora eingetreten – ein Land, das seine Bewohner den „Scherbenhof der Träume“ nennen. Es heißt, die Welt fiel im Jahr 923, als der Große Bruch die Erde spaltete und das Essenz-Blut zu fließen begann. Seitdem klammern sich die Menschen an alte Glaubensstrukturen – besonders an den Kettenherrscher und seine strengen Kettenregeln.</p>

<p>Die Essenz selbst scheint mehr als nur eine Substanz zu sein. Man erzählt mir, sie sei ein Fragment uralten Chaos’, das einst gebannt war, nun aber wieder durch die Risse der Welt sickert. Ich habe gesehen, wie sie das, was sie berührt, verändert – Lebendes wie Totes. Sie ist kein Segen und kein Fluch, sondern beides zugleich.</p>

<p>Die Kettenregeln: Der Kettenherrscher soll sie selbst erlassen haben, um Ordnung und Hierarchie inmitten des Chaos zu bewahren. Seine Gläubigen tragen sichtbare Ketten als Zeichen der Unterwerfung unter die göttliche Ordnung. Ich beobachtete verschiedene Arten:</p>
<ul>
    <li>Normale Bürger: Eisenketten an Bauch oder Arm</li>
    <li>Adel und Fürsten: Silber- oder Stahlketten um Hals oder Schulter</li>
    <li>Priester und Richter: schwere Ketten aus Eisen oder Gold über Brust und Handgelenke</li>
</ul>
`,

`
<p>Die Wunden der Welt: Überall im Land finden sich Essenzrisse und Essenzschluchten. Sie sind die Geburtsstätten der Essenzkreaturen und der gewaltigen Essenzstürme.</p>

<p>Der Reichtum: In den tiefsten, tödlichsten Essenzquellen bilden sich Essenzkristalle. Unsere Essenzräuber riskieren ihr Leben in den Schluchten, um diese an die Großabnehmer zu verkaufen. Die Händler feilschen zudem mit <span class="strikethrough" data-unredacted="Gefrorene Tränen – Relikte der Slezanen, gehärtete Essenzen, die aus Erinnerungen Verstorbener gewonnen werden. Man sagt, sie machen Magie unkontrollierbar stark.">Gefrorenen Tränen – mysteriösen, gehärteten Sekreten, die Magie unkontrollierbar stark machen. [Zensiert. 147 Zeichen]</span>.</p>

<p>Der Schwarze Markt: Er ist das Herz Vaelmoras. Paradoxerweise wird er von den Fürsten selbst kontrolliert. Hier findet man alles Verbotene und Essenzgebundene. Vieles, was dort gehandelt wird, bleibt unausgesprochen – nur die Mutigsten wagen sich hinein.</p>
`,

`
<p>II. Die Zersplitterte Herrschaft – Unsere Fürsten: Die Fürsten von Vaelmora sind unsere Herren. Sie bieten kaum Schutz, doch verlangen Gehorsam und hohe Abgaben. Man flüstert sich Folgendes zu:</p>

<p>Fürst Vorgath: Er herrscht über die toxischen Schattenmarschen. <span class="strikethrough" data-unredacted="Sein Reichtum stammt aus dem Handel mit Gefrorenen Tränen, die über geheime Transportwege bis in die Schwarzmärkte von Thetreby gelangen. Seine Aufseher arbeiten mit dem Kodex des Roten Gesetzes zusammen.">Export eines Gifttrank-Rauschmittels. [Zensiert. 88 Zeichen]</span>.</p>

<p>Fürst Kaelon: Er regiert die Dörfer nahe der Grauen Ebenen. Man sagt, er habe einen <span class="strikethrough" data-unredacted="schrecklichen Pakt geschlossen, um seine Pächter vor der Versteinerungskrankheit zu retten. Dieser Pakt kostet ihn seine Seele und zwingt ihn, seinen eigenen Leuten in die Augen zu blicken, was ihn von der Öffentlichkeit fernhält.">schrecklichen Pakt geschlossen [Zensiert. 235 Zeichen]</span>.</p>

<p>Fürst Caludrin: Er sitzt in der Hauptstadt Thetreby und herrscht mit eiserner Ordnung. Unter seiner Verwaltung werden Essenzmutierte als <em>Unreine</em> betrachtet und aus ihren Dörfern verstoßen. Seine Edikte sind streng, seine Kontrolle lückenlos. Man sagt, er sehe in jeder Mutation eine Ketzerei gegen die Schöpfung selbst.</p>

<p>Doch selbst seine eiserne Herrschaft beginnt zu bröckeln. Intrigen schwächen seine Macht, während ein größeres Rätsel über ihm schwebt – die Rückkehr seines lang verschollenen Bruders, der nach über fünfzig Jahren wieder erschien und keinen Tag gealtert scheint.</p>

<p>Von weiteren Fürsten hört man nur hinter vorgehaltener Hand – Namen, die ich nie selbst gehört habe, deren Einfluss jedoch wie ein fernes Donnergrollen über Vaelmora liegt.</p>
`,

`
<p>III. Der Kodex und die Vergessenen: In den Schatten der Großstädte Vaelmoras wächst die Macht einer Organisation, die sich der Kodex des Roten Gesetzes nennt. In ihrem Namen geschehen Attentate, Plünderungen und heimliche Werke, doch was sie wirklich wollen, bleibt im Dunkeln. </p>
`,

`
<p>IV. Die anderen Reiche – Was man am Feuer hört: Die drei großen Reiche haben ihre Existenz um die Essenz herum aufgebaut und stehen in ständigem ideologischen Konflikt zueinander.</p>

<p>1. Agramon – Das Reich der gebrochenen Klingen (Die Gier): Sie sind militaristisch und brutal. Sie sehen in der Essenz die ultimative Macht. Ihr Motto lautet: „Krieg ist der einzige Weg.“</p>

<p>Die Blutprobe: Man sagt, sie zwingen ihre Bürger, sich einer Infusion mit Essenz zu unterziehen – der sogenannten Blutsteuer. Wer überlebt, wird zum Krieger, zum vollwertigen Bürger. Wer scheitert, wird verstoßen und in die niedersten Dienste gezwungen.</p>
`,

`
<p>2. Altheris – Die Zitadelle der Kontrolle (Die Angst): Sie sind Gelehrte, die in Furcht leben. Ihre Philosophie: Die Essenz sei eine göttliche Strafe, und nur durch Isolation könne man ihr entgehen. Sie haben sich hinter massiven Mauern verschanzt – Ordnung durch Abschottung.</p>

<p>Die Technologie: Sie nutzen eine als Magitek bekannte Kunst. Ihre kristallgespeisten Barrieren schützen ihre Städte, und die Reinheitsglocke ist ein Instrument, das jeden Winkel überwacht.</p>

<p>Die Gesellschaft: Das Volk ist in Kasten unterteilt – Reinblütige (Elite), Gebrandmarkte (Arbeiter mit leichten Mutationen) und Exilanten (stark Mutierte), die in die Wüsten verbannt wurden. Man munkelt, dass sich unter den Gebrandmarkten eine Rebellengruppe namens <span class="strikethrough" data-unredacted="Die Gespaltenen">Die Gespaltenen</span> verbirgt.</p>
`,

`
<p>V. Der Himmel und die Alten – Der Glaube: Ich habe in vielen Dörfern gehört, dass die Götter seit dem Großen Bruch kaum noch antworten. Ihr Schweigen verunsichert viele, doch der Glaube hält – verbogen, aber nicht gebrochen.</p>

<p>Der Kettenherrscher (Die Ordnung): Von allen ist er der lauteste in den Gebeten der Menschen. Er gilt als Gott der Gesetze, der Strafe und der Struktur. Seine Jünger glauben, nur durch Ordnung, Pflicht und Leid könne die Welt wieder heil werden. Ich sah, wie Männer sich selbst in Ketten legten, um Buße zu tun. Sie nennen es „Dienst an der Welt“.</p>

<p>Die Erntemutter (Fruchtbarkeit): Über sie schweigt man inzwischen fast. Felder verdorren, Ernten fallen aus. Die alten Gebete scheinen machtlos. Ich hörte, dass manche in der Dunkelheit versuchen, sie durch <span class="strikethrough" data-unredacted="dunkle Rituale">dunkle Rituale</span> zu besänftigen – doch keiner spricht offen darüber.</p>

<p>Die Schattenzwillinge (Die Heimlichen): Ihr Einfluss wächst im Verborgenen. Wanderer erzählen, sie seien die Herren des Vergessens, die neue Identitäten gewähren – zu einem Preis. Davon habe ich gehört, ebenso wie von <span class="strikethrough">Ghule</span> und <span class="strikethrough">Offränen</span> – doch nie selbst eines dieser Dinge gesehen.</p>

<p>Je länger ich durch Vaelmora reise, desto klarer wird mir: In dieser Ära des Essenz-Blutes überlebt nur, wer zu verstehen sucht – nicht, wer blind folgt. Wahrheit ist hier wie die Essenz selbst – veränderlich, gefährlich, aber unvermeidlich.</p>
`
];





let currentPage = 0;
let processedPages = [];

const leftDiv = document.querySelector('.left-text');
const rightDiv = document.querySelector('.right-text');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const bookButtonsDiv = document.querySelector('.book-buttons');

const MAX_HEIGHT_PER_SIDE = 120; // Anpassen an deine Buchseiten-Höhe

function splitTextByHeight(htmlText) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlText.trim();
    tempDiv.style.position = 'absolute';
    tempDiv.style.visibility = 'hidden';
    tempDiv.style.width = leftDiv.offsetWidth + 'px';
    document.body.appendChild(tempDiv);
    
    const children = Array.from(tempDiv.children);
    const pages = [];
    let currentLeft = [];
    let currentRight = [];
    let leftHeight = 0;
    let rightHeight = 0;

    children.forEach(element => {
        const testDiv = document.createElement('div');
        testDiv.style.width = leftDiv.offsetWidth + 'px';
        testDiv.appendChild(element.cloneNode(true));
        tempDiv.appendChild(testDiv);
        const elementHeight = testDiv.offsetHeight;
        tempDiv.removeChild(testDiv);

        if (leftHeight + elementHeight <= MAX_HEIGHT_PER_SIDE && rightHeight + elementHeight <= MAX_HEIGHT_PER_SIDE) {
            if (leftHeight <= rightHeight) {
                currentLeft.push(element.cloneNode(true));
                leftHeight += elementHeight;
            } else {
                currentRight.push(element.cloneNode(true));
                rightHeight += elementHeight;
            }
        }
        else if (leftHeight + elementHeight <= MAX_HEIGHT_PER_SIDE) {
            currentLeft.push(element.cloneNode(true));
            leftHeight += elementHeight;
        }
        else if (rightHeight + elementHeight <= MAX_HEIGHT_PER_SIDE) {
            currentRight.push(element.cloneNode(true));
            rightHeight += elementHeight;
        }
        else {
            pages.push({
                left: currentLeft.map(el => el.outerHTML).join('\n'),
                right: currentRight.map(el => el.outerHTML).join('\n')
            });
            currentLeft = [element.cloneNode(true)];
            currentRight = [];
            leftHeight = elementHeight;
            rightHeight = 0;
        }
    });

    if (currentLeft.length > 0 || currentRight.length > 0) {
        pages.push({
            left: currentLeft.map(el => el.outerHTML).join('\n'),
            right: currentRight.map(el => el.outerHTML).join('\n')
        });
    }

    document.body.removeChild(tempDiv);
    return pages;
}

function processAllBookTexts() {
    processedPages = [];
    bookTexts.forEach(text => {
        const pages = splitTextByHeight(text);
        processedPages.push(...pages);
    });
}

function showPage(index) {
    if (processedPages.length === 0) {
        processAllBookTexts();
    }
    
    const page = processedPages[index];
    
    leftDiv.innerHTML = page.left;
    rightDiv.innerHTML = page.right;

    const rumors = [
        'Gerüchte wehen durch die Stadt. Finde heraus, worum es geht.',
        'Man munkelt von etwas, das im Dunkeln wartet. Such danach.',
        'Flüsterer sprechen von Geheimnissen. Du hast gerade eines berührt.',
        'Die Leute reden. Du weißt noch nichts — aber das könnte sich ändern.',
        'Ein Gerücht ist erwacht. Folge der Spur, wenn du Mut hast.',
        'Etwas wird gemunkelt. Keiner weiß mehr als ein Fragment. Erforsche es.',
        'Halte deine Ohren offen — die Gerüchte haben dich gefunden.',
        'Ein leiser Hinweis reicht: die Wahrheit versteckt sich. Suche weiter.',
        'Man erzählt sich Geschichten. Du hast gerade eine davon berührt.',
        'Gerüchtepflaster auf den Straßen. Sammle die losen Fäden.',
        'Etwas zieht an den Rändern der Geschichten. Geh den Spuren nach.',
        'Was die Leute tuscheln, ist noch unbewiesen. Du kannst Licht hineintragen.'
    ];

    const strikethroughElements = [...leftDiv.querySelectorAll('.strikethrough'), ...rightDiv.querySelectorAll('.strikethrough')];
    strikethroughElements.forEach(el => {
        el.addEventListener('click', () => {
            const randomRumor = rumors[Math.floor(Math.random() * rumors.length)];
            alert(randomRumor);
        });
    });

    updateButtonState();
}

function updateButtonState() {
    bookButtonsDiv.classList.add('active-buttons');
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === processedPages.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < processedPages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
});

// Initial anzeigen
showPage(currentPage);

document.addEventListener('DOMContentLoaded', () => {
    const img_container = document.getElementById('image-grid-container');

    const bildPfade = [
        './missionen/1.png',
        './missionen/2.png',
        './missionen/3.png'
    ];

    const gridImages = [];
    
    function populateImageGrid() {
        img_container.innerHTML = '';
        gridImages.length = 0;
        
        bildPfade.forEach((pfad, index) => {
            const img = document.createElement('img');
            img.src = pfad;
            img.alt = `Abenteuerbild ${index + 1}`;

            img_container.appendChild(img);
            gridImages.push(img);

            img.addEventListener('click', function(event) {
                event.stopPropagation();
                handleGridImageClick(img, index);
            });
        });
    }

    populateImageGrid();

    function handleGridImageClick(clickedImage, imageIndex) {
        const adventureTitle = clickedImage.alt;
        const adventureNumber = imageIndex + 1;

        console.log(`Abenteuerbild geklickt: ${adventureTitle}`);
        
        const speechText = speechBubble.querySelector('.speech-text');
        
        const speechTexts = [
            "Ahhh, Täuschung und Brandstiftung!",
            "Das zweite Abenteuer... sehr interessant!",
            "Dieses Abenteuer kenne ich gut!",
            "Eine meiner Lieblingsgeschichten!",
            "Ah ja, diese Geschichte...",
            "Das wird dir gefallen!",
            "Eine mysteriöse Geschichte!",
            "Dies ist besonders spannend!",
            "Eines der gefährlichsten Abenteuer!",
            "Eine Geschichte voller Geheimnisse!"
        ];
        
        speechText.textContent = speechTexts[imageIndex] || "Interessante Wahl!";
        speechBubble.classList.add('show');
        
        setTimeout(() => {
            speechBubble.classList.remove('show');
            
            setTimeout(() => {
            img_container.innerHTML = '';
                    
            // CSS über JS korrekt setzen
            img_container.style.position = 'absolute';
            img_container.style.top = '5%';           // oben positioniert
            img_container.style.left = '10%';         // nach links verschoben
            img_container.style.transform = 'none';   // keine Zentrierung
            img_container.style.display = 'flex';
            img_container.style.flexWrap = 'wrap';
            img_container.style.gap = '10px';
            img_container.style.justifyContent = 'flex-start';
            img_container.style.alignItems = 'flex-start';
            img_container.style.padding = '20px';
            img_container.style.paddingRight = '25vh';
            img_container.style.maxHeight = '80vh';   // maximale Höhe für den Container
            img_container.style.overflowY = 'auto';   // scrollbar für Text
                        
const adventureTexts = [
    // Das erste Abenteuer: Der Diebstahl
    `<h2 class="book-heading">Das erste Abenteuer: Der Diebstahl</h2>
    <p>Es war ein regnerischer Abend in <strong>Turov</strong>, der die Straßen in Matsch verwandelte. Durch den dichten Regen schimmerte das Licht einer Taverne – warm, laut und voller Leben. Vor der Taverne hing ein Anschlagbrett mit einem Auftrag, der ein rotes Siegel trug. Drei Fremde hatten sich zusammengefunden: <strong>Harald</strong>, ein Bloodhunter, der sich als Diener eines reichen Herrn ausgab; <strong>Bjorpi</strong>, ein verschlagener Schurke; und <strong>Franz Quafka</strong>, der froschhafte Mönch.</p>
    <p>Drinnen herrschte Lärm und Bewegung. Ein <strong>Barde</strong> spielte laut, zwei Männer stritten, andere flüsterten im Schatten. Harald sprach von einem Auftrag, und die beiden anderen stimmten zu, ihm zu folgen. Ihre Spur führte sie zu einem <strong>Bettler</strong>, einer <strong>Wäscherei</strong> und schließlich zu gestohlenen <strong>Rüstungen Agramons</strong>, mit denen sie sich tarnen konnten.</p>
    <p>Schließlich fanden sie den Weg zu einem <strong>geheimen Soldatenheim</strong>. Um hineinzugelangen, legten sie selbst <strong>Feuer</strong> – nicht aus Zerstörungswut, sondern um die Wachen zu vertreiben. Im entstehenden Chaos entwendeten sie das <strong>Fahrtenbuch des Kommissars</strong> und entkamen unbehelligt. Doch bereits in der Nacht bemerkten sie die ersten Anzeichen einer größeren Gefahr: Banditen mit Dolchen, die drei vertikale Striche trugen. <strong>(Ziel: Fahrtenbuch)</strong></p>`,

    // Das zweite Abenteuer: Die Rettung
    `<h2 class="book-heading">Das zweite Abenteuer: Die Rettung</h2>
    <p>Am frühen Morgen folgten <strong>Harald</strong>, <strong>Bjorpi</strong> und <strong>Franz Quafka</strong> den Spuren der Banditen. Die Dolche mit den drei vertikalen Strichen zeigten, dass dies kein Zufall war. Harald sicherte Heiltränke, und rote Talismane wurden geborgen. Ein missgestalteter Kobold hinterließ ein Pergament mit einer rätselhaften Rune, die offenbar einen Empfang auch ohne Talisman erlaubte.</p>
    <p>Ein schmaler Pfad führte sie zu einem alten Haus auf einer Lichtung. Rauch stieg aus dem Schornstein, Vogelscheuchen bewachten das Feld. Im Haus fanden sie eine violette Flüssigkeit und ein Lederbuch voller Experimente. In der Nacht griff eine lebendige Vogelscheuche an. Mit Feuer, Gift und vereinter Kraft besiegten sie sie, und unter dem Kürbiskopf offenbarte sich ein menschliches Gesicht.</p>
    <p>Auf einem Trampelpfad stießen sie auf eine Karawane mit Wachen. Soldatenkleidung half kaum; ein Kampf entbrannte, Pfeile und Magie prasselten auf sie nieder. Schließlich entdeckten sie eine seltsam rote Kugel, aus der ein bewusstloser Paladin hervorging. Ein dämonischer Frosch erhob sich, doch gemeinsam überwanden sie ihn und retteten den Paladin: <strong>Orelio Eisenfaust</strong>.</p>
    <p>Als Orelio geschwächt in der Kugel lag, zog <strong>Franz Quafka</strong> plötzlich ein Messer, um den Paladin zu töten und die Essenz zu stehlen. <strong>Harald</strong> reagierte blitzschnell und tötete Quafka, bevor dieser sein Vorhaben vollenden konnte. Nach diesem letzten Schrecken zogen sie sich zurück – verletzt, erschöpft, doch lebendig. <strong>(Ziel: Orelio Eisenfaust)</strong></p>`,

    // Das dritte Abenteuer: Auffindung von Felix und der Eulenbär
    `<h2 class="book-heading">Das dritte Abenteuer: Auffindung von Felix</h2>
    <p>Die Helden <strong>Bjorpi</strong>, <strong>Orelio</strong> und <strong>Harald</strong> durchstreiften einen dichten Wald, als sie einen schrillen, unmenschlichen Schrei hörten. Kurz darauf entdeckten sie einen Jungen, der auf einem Moosbaum saß. Es war Felix, etwa zehn bis vierzehn Jahre alt, mit einem blutigen Messer in der Hand. Vor ihm lag ein gehäutetes Eulenbärbaby. \"Das sind meine, die habe ich ganz fair selber gefangen\", behauptete der Junge, während ein süßlich-fauler Geruch und Blutgeruch die Szene begleiteten.</p>
    <p>Kaum hatten sie die Situation erfasst, erschien die Eulenbären-Mutter – ein großes, wütendes Monstrum , das verzweifelt nach ihren Jungen suchte. Sie griff sofort an, als sie ihre toten Junges sah.</p>
    <p>Nach dem Kampf ging die Gruppe in die Taverne "Zum Verlorenen Jungen", wo der Junge als verlorener Bruder des Fürsten Caludrin erkannt wurde. Die Soldaten schicken sie zu einer Audienz zu <strong>Fürst Caludrin</strong> in dessen riesiger Bibliothek. Caludrin erklärte ruhig und prüfend: \"Fünfzig Jahre... und jetzt kehrt mein Bruder in einem Kinderkörper zurück. Was für ein grausamer Scherz der Welt. Doch... auch ein Segen.\" Er reichte Felix Brot und Wein, und die Gruppe erkannte, dass der Junge tatsächlich der seit 50 Jahren vermisste Fürstenbruder war.</p>
    <p>Für die Hilfe erhielten die Helden Gold, ein Fürstliches Siegel und die Wahl zwischen einem <strong>Bag of Holding</strong>, <strong>Boots of Elvenkind</strong> oder einem <strong>Immovable Rod</strong>. Felix war in Sicherheit, und die Helden zogen mit neuen Belohnungen und Erkenntnissen aus der Bibliothek zurück.</p>`
];



                
                const textToShow = adventureTexts[imageIndex] ||
                    `<h2 class="book-heading">Abenteuer ${adventureNumber}</h2>
                     <p>Die Geschichte dieses Abenteuers wartet noch darauf, geschrieben zu werden...</p>`;
                
                img_container.innerHTML = textToShow;
                
                const backButton = document.createElement('button');
                backButton.textContent = '← Zurück zur Übersicht';
                backButton.style.marginTop = '20px';
                backButton.style.padding = '10px 20px';
                backButton.style.cursor = 'pointer';
                
                backButton.addEventListener('click', () => {
                    resetImageGrid();
                });
                
                img_container.appendChild(backButton);
            }, 0);
        }, 500);
    }

    function resetImageGrid() {
        img_container.innerHTML = '';
        
        // CSS über JS korrekt setzen
            img_container.style.position = 'absolute';
            img_container.style.top = '5%';           // oben positioniert
            img_container.style.left = '10%';         // nach links verschoben
            img_container.style.transform = 'none';   // keine Zentrierung
            img_container.style.display = 'flex';
            img_container.style.flexWrap = 'wrap';
            img_container.style.gap = '10px';
            img_container.style.justifyContent = 'flex-start';
            img_container.style.alignItems = 'flex-start';
            img_container.style.padding = '20px';
            img_container.style.paddingRight = '25vh';
            img_container.style.maxHeight = '80vh';   // maximale Höhe für den Container
            img_container.style.overflowY = 'auto';   // scrollbar für Text
        
        populateImageGrid();
    }
});
