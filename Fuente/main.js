import App from './App.svelte';
import './firebase'

import 'bootswatch/dist/lux/bootstrap.min.css';
import 'toastr/build/toastr.css'
import 'toastr/build/toastr.js'


const app = new App({
	target: document.body,
	
});

export default app;