import Search from './components/Search';
import ShowPage from './components/ShowPage';

// This is your plugin object. It can be exported to be used anywhere.
const Blacklight = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue, options) {

    // We call Vue.mixin() here to inject functionality into all components.
  	Vue.mixin({
      // Anything added to a mixin will be injected into all components.
      // In this case, the mounted() method runs when the component is added to the DOM.
      mounted() {
        console.log('Mounted!');
      },
      install(Vue, options) {
        Vue.component(Search.name, Search)
        Vue.component(ShowPage.name, ShowPage)
      }
    });
  }
};

export default Blacklight;
