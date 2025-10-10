import Prism from 'prismjs';
import { onMounted } from 'vue';
import 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-html';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
onMounted(() => {
  Prism.highlightAll();
});