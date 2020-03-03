var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')

// form submit event
form.addEventListener('submit', addItem)
// remove item
itemList.addEventListener('click', removeItem)
//filter items
filter.addEventListener('keyup', filterItems)

// add item
function addItem (e) {
	e.preventDefault()

	// get input value
	var item = document.getElementById('item').value

	//create new element li
	var li = document.createElement('li')

	//add class name to li
	li.className = "list-group-item"

	//add text node with input value
	li.appendChild(
		document.createTextNode(item)
	)

	// create delete button
	var deleteBtn = document.createElement('button')

	// add class to button
	deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

	//add text node 
	deleteBtn.appendChild(
		document.createTextNode('X')
	)
	// append button to li
	li.appendChild(deleteBtn)

	//append li to list
	itemList.appendChild(li)
}

//remove item
function removeItem (e) {
	if(e.target.classList.contains('delete')){
		if(confirm('Are you sure?')){
			var li = e.target.parentElement;
			itemList.removeChild(li)
		}
	}
}

//filter items

function filterItems (e) {
	// convert to lower case
	var text = e.target.value.toLowerCase();

	// get lis
	var items = itemList.getElementsByTagName('li')

	Array.from(items).forEach( function(item) {
		var itemName = item.firstChild.textContent
		if(itemName.toLowerCase().indexOf(text) != -1){
			item.style.display = 'block'
		}else{
			item.style.display = 'none'
		}
	}); 
}