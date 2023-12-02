
var siteName = document.getElementById("bookmarkName")
var websiteURL = document.getElementById("bookmarkURL")
var submitBtn =document.getElementById("submitBtn")
var nameV = document.getElementById("nameV")
var productContainer = []
var con = document.getElementById("con")
if(localStorage.getItem("products") != null) {
    productContainer = JSON.parse(localStorage.getItem("products"))
    displayProduct(productContainer)
}

function addProduct () {

    if(validationName()==true) {
        
          var  product= {
        name: siteName.value,
        website: websiteURL.value,
    }
    productContainer.push(product)
    localStorage.setItem("products" , JSON.stringify(productContainer))
    displayProduct(productContainer)
    clearForm ()
}
else {
   con.classList.remove("nn")
    con.classList.add("xx")
    siteName.classList.add("invalied")
    
}

    }



 
function displayProduct(arr) {
    cartona = ""
    for(var i=0 ; i < arr.length ; i++) {
        cartona+= `
     <tr>
        <td>${i+1}</td>
        <td>${arr[i].name}</td>
        <td><button class="btn btn-warning text-white">
            <i class="fa-solid fa-eye"></i>
            Visit
        </button>
         </td>
        <td>
            <button onclick="deleteProduct(${i})" class="btn btn-danger text-white">
                <i class="fa-solid fa fa-delete-left"></i>
                Delete
            </button>
        </td>
    </tr>

        `
    }
    document.getElementById("tbody").innerHTML = cartona
    
}

function clearForm () {
     siteName.value=""
     websiteURL.value=""
}

function deleteProduct(productIndex) {
    productContainer.splice(productIndex,1)
    localStorage.setItem("products",JSON.stringify(productContainer))
    displayProduct(productContainer)
}

function validationName (){
    var regex = /[^~?@#$^&*)(_+][a-z]{2,}[A-Z]{0,2}/
    if (regex.test(siteName.value)== true) {
        siteName.classList.add("green")
        siteName.classList.remove("red")
        return true

        
    }
    else {
        siteName.classList.remove("green")
        siteName.classList.add("red")
        return false
        
    }
}


function closeWindow() {
    console.log("clicked");
    con.classList.remove("xx")
    con.classList.add("nn")
}