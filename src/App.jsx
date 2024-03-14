// CSS
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.min.css';

// Core components
import ItemReview from './components/views/ItemReview';
import Navibar from './components/Navibar';
import KanjiLearning from './components/views/KanjiLearning';
import MainMenu from './components/views/MainMenu';
import VocabularyLearning from './components/views/VocabularyLearning';

// HTML 'class' tags should be replaced with 'className' to avoid clashes with JavaScript 'class' keyword
export default function App() {
    return (
        // The empty element <> is needed for the return value to still count as a single HTML block
        // It could also be a <div></div> block
        // TODO: Switching between top-level menus requires a global state and/or context
        <div>
            <Navibar />
            <div class="container">
               <MainMenu /> 
            </div>
        </div>
    );
}
