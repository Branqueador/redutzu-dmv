const QUESTIONS = [
    { 
        title: 'Întoarcerea unui vehicul este interzisă:',
        image: false,
        answers: [
            { label: 'la o distanță mai mică de 50 m de stația de autobuz, troleibuz sau tramvai;', correct: false },
            { label: 'în rampă, unde vizibilitatea este sub 50 m;', correct: false },
            { label: 'pe străzile pe care circulația se desfășoară în ambele sensuri.', correct: true }
        ]
    },
    { 
        title: 'Conducătorul de autoturism care se află în spatele unui autobuz şi întâlneşte indicatorul „Oprire” trebuie:',
        image: false,
        answers: [
            { label: 'să continue deplasarea şi să traverseze o dată cu autobuzul, deoarece conducătorul acestuia a oprit şi s-a asigurat;', correct: false },
            { label: 'să oprească şi să se asigure înainte de a traversa intersecţia, chiar dacă acest lucru a fost făcut şi de către conducătorul autobuzului;', correct: true },
            { label: 'să continue deplasarea şi să traverseze intersecţia imediat în urma autobuzului, deoarece, în acest caz, nu se expune niciunui pericol.', correct: false }
        ]
    },
    { 
        title: 'Ce obligaţii aveţi la întâlnirea indicatorului „Biciclişti“?',
        image: false,
        answers: [
            { label: 'să reduceţi viteza la maximum 30 km/h;', correct: false },
            { label: 'să circulaţi cu atenţie şi, dacă este cazul, acordaţi prioritate de trecere bicicliştilor care circulă pe pista special destinată;', correct: true },
            { label: 'nu aveţi nicio obligaţie, bicicliştii vă vor acorda prioritate.', correct: false }
        ]
    },
    { 
        title: 'Se interzice depășirea:',
        image: false,
        answers: [
            { label: 'atunci când se încalcă marcajul continuu longitudinal;', correct: true },
            { label: 'în zonele cu trafic intens; ', correct: false },
            { label: 'când se încalcă marcajul discontinuu longitudinal.', correct: false }
        ]
    },
    { 
        title: 'În timp ce conduceţi un autoturism, aveţi voie să efectuaţi manevra de depăşire a unui autobuz oprit în staţie pentru urcarea şi coborârea călătorilor?',
        image: false,
        answers: [
            { label: 'da;', correct: true },
            { label: 'da, numai dacă lăţimea drumului public este mai mare de 6 m;', correct: false },
            { label: 'nu, în acest caz depăşirea este interzisă.', correct: false }
        ]
    },
    { 
        title: 'Care este limita maximă de viteză în afara localităţilor, pe drumurile expres sau pe cele naţionale europene (E)?',
        image: false,
        answers: [
            { label: '100 km/h;', correct: true },
            { label: '110 km/h;', correct: false },
            { label: '90 km/h.', correct: false }
        ]
    },
    { 
        title: 'La întâlnirea unui vehicul care circulă noaptea, din sens opus, pe un drum neiluminat, conducătorul de autovehicul este obligat:',
        image: false,
        answers: [
            { label: 'să circule cât mai aproape de marginea din dreapta a drumului;', correct: false },
            { label: 'să reducă viteza;', correct: true },
            { label: 'să folosească avertizorul sonor.', correct: false }
        ]
    },
    { 
        title: 'Conducătorii de vehicule trebuie să respecte regulile de circulație, generale și particulare, în următoarea ordine:',
        image: false,
        answers: [
            { label: 'semnalele, indicațiile și dispozițiile polițistului rutier; semnalele speciale de avertizare, luminoase sau sonore, ale autovehiculelor cu regim de circulație prioritară; semnalizarea temporară;', correct: true },
            { label: 'semnalele, indicațiile și dispozițiile polițistului rutier; semnalizarea temporară; semnalele speciale de avertizare, luminoase sau sonore, ale autovehiculelor cu regim de circulație prioritară;', correct: false },
            { label: 'semnalele speciale de avertizare, luminoase sau sonore, ale autovehiculelor cu regim de circulație prioritară; semnalele, indicațiile și dispozițiile polițistului rutier; semnalizarea temporară.', correct: false }
        ]
    },
    { 
        title: 'În care dintre următoarele situaţii sunteţi obligat să circulaţi cu o viteză care să nu depăşească 30 km/h în localităţi?',
        image: false,
        answers: [
            { label: 'în curbele deosebit de periculoase, semnalizate ca atare;', correct: true },
            { label: 'în curbele în care vizibilitatea este sub 50 m;', correct: true },
            { label: 'în zonele în care este interzisă depăşirea.', correct: false }
        ]
    },
    { 
        title: 'Purtarea centurii de siguranţă nu este obligatorie în localităţi pentru:',
        image: false,
        answers: [
            { label: 'copiii cu vârsta de până la 12 ani;', correct: false },
            { label: 'persoanele care posedă un document în acest sens, emis de o instituţie medicală de specialitate;', correct: true },
            { label: 'femeia care prezintă o sarcinã vizibilă.', correct: true }
        ]
    },
    { 
        title: 'Ce obligații aveți în situația dată?',
        image: 'https://www.scoalarutiera.ro/upload/img/questions/img/Cat_Tr_poz228.jpg',
        answers: [
            { label: 'să acordați prioritate pietonilor;', correct: false },
            { label: 'să claxonați, pentru a avertiza pietonii;', correct: false },
            { label: 'să circulați cu prudență, întrucât indicatorul presemnalizează o trecere pentru pietoni.', correct: true }
        ]
    },
    { 
        title: 'Care dintre indicatoare conferă prioritatea de trecere?',
        image: 'https://www.scoalarutiera.ro/upload/img/questions/img/Cat_Tr_poz231.jpg',
        answers: [
            { label: 'indicatorul 1;', correct: true },
            { label: 'indicatorul 2;', correct: false },
            { label: 'indicatorul 3.', correct: false }
        ]
    }
];

const QUESTIONS_PER_TEST = QUESTIONS.length;
const CORRECT_REQUIRED = 8;
