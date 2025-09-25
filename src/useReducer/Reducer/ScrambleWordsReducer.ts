export interface ScrambleWordsState {
    currentWord: string;
    errorCounter: number;
    guess: string;
    isGameOver: boolean;
    maxAllowErrors: number;
    maxSkips: number;
    points: number;
    scrambledWord: string;
    skipCounter: number;
    words: string[];
    totalWords: number;
}

export type ScrambleWordsAction =
    | { type: 'SET_GUESS'; payload: string }
    | { type: 'SUBMIT_GUESS' }
    | { type: 'SKIP_WORD' }
    | { type: 'PLAY_AGAIN', payload: ScrambleWordsState }
    | { type: 'SET_WORDS'; payload: string[] };


const GAME_WORDS = [
    'REACT',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'HTML',
    'ANGULAR',
    'SOLID',
    'NODE',
    'VUEJS',
    'SVELTE',
    'EXPRESS',
    'MONGODB',
    'POSTGRES',
    'DOCKER',
    'KUBERNETES',
    'WEBPACK',
    'VITE',
    'TAILWIND',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};


export const initialState = (): ScrambleWordsState => {
    const shuffledWords = shuffleArray([...GAME_WORDS]);

    return {
        currentWord: shuffledWords[0],
        errorCounter: 0,
        guess: '',
        isGameOver: false,
        maxAllowErrors: 3,
        maxSkips: 3,
        points: 0,
        scrambledWord: scrambleWord(shuffledWords[0]),
        skipCounter: 0,
        words: shuffledWords,
        totalWords: shuffledWords.length,
    }
};

export const ScrambleWordsReducer = (state: ScrambleWordsState, action: ScrambleWordsAction): ScrambleWordsState => {

    switch (action.type) {
        case 'SET_GUESS':
            return {
                ...state,
                guess: action.payload
            };
        case 'SUBMIT_GUESS':
            if (state.guess === state.currentWord) {

                const nextWords = state.words.filter(word => word !== state.currentWord);

                return {
                    ...state,
                    points: state.points + 1,
                    words: nextWords,
                    currentWord: nextWords[0],
                    scrambledWord: scrambleWord(nextWords[0]),
                    guess: ''
                };
            }
            return {
                ...state,
                errorCounter: state.errorCounter + 1,
                guess: '',
                isGameOver: state.errorCounter + 1 >= state.maxAllowErrors,

            }
        case 'SKIP_WORD':

            const skipWorkd = state.words.slice(1);

            return {
                ...state,
                skipCounter: state.skipCounter + 1,
                words: skipWorkd,
                currentWord: skipWorkd[0],
                scrambledWord: scrambleWord(skipWorkd[0])
            };
        case 'PLAY_AGAIN':
            return action.payload;
        default:
            return state;
    }
};