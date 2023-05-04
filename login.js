


const host=""//ngrok link;
const poth="/saml/SingleSignOnService";

function showError(message) {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}


function otpless(otplessUser) {
    email = JSON.stringify(otplessUser?.email?.email);
    if(email){
        const query=new URLSearchParams(window.location.search);
        const samlRequest=query.get("SAMLRequest");
        if(samlRequest){
            fetch(`${host}${path}`).catch((e)=>{
                showError(e.message);
            })
        }
    }
}
