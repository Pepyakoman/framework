class DropMenu {
	constructor () {
		let dropMenu = document.createElement ('div');
		dropMenu.classList.add ('b-dropMenu');

		let menuHead = document.createElement ('div');
		menuHead.classList.add ('b-dropMenu__menuHead');
		menuHead.textContent = 'Выбирете...'

		let menuBody = document.createElement ('div');
		menuBody.classList.add ('b-dropMenu__menuBody');

		dropMenu.append (menuHead, menuBody);

		dropMenu.addEventListener ('mousedown', e => e.preventDefault());
		dropMenu.addEventListener ('click', click);

		document.body.querySelector ('.dropMenu').replaceWith (dropMenu);

		function click (event) {
			let dropMenu__menuBody__elem = event.target.closest ('.b-dropMenu__menuBody__elem');
			let dropMenu__menuHead = event.target.closest ('.b-dropMenu__menuHead');

			if (dropMenu__menuBody__elem) {
				select (dropMenu__menuBody__elem);
			}
			
			toggle (this);
		}

		function select (elem) {
			if (typeof elem == 'object') {
				let dropMenu__menuBody = elem.closest ('.b-dropMenu__menuBody');

				for (let item of dropMenu__menuBody.children) {
					item.classList.remove ('b-dropMenu__menuBody__elem_select')
				}

				elem.classList.add ('b-dropMenu__menuBody__elem_select');

				let menuHead = dropMenu__menuBody.closest ('.b-dropMenu').querySelector ('.b-dropMenu__menuHead');
				menuHead.textContent = elem.textContent;
			}
		}

		function toggle (dropMenu) {
			let menuBody = dropMenu.querySelector ('.b-dropMenu__menuBody');
			menuBody.classList.toggle ('b-dropMenu__menuBody_open')
		}

		function addElements (items) {

			items.forEach (item => {
				let elem = document.createElement ('div');
				elem.textContent = item;
				elem.classList.add ('b-dropMenu__menuBody__elem')

				menuBody.append (elem);
			})
		}

		this.addElements = addElements;
		this.select = select;
	}
}

let yearBox = new DropMenu ();

let arr = ['2011','2012','2013'];

yearBox.addElements (arr)

console.log (yearBox);