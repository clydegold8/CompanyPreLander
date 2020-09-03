
window.onload = function () {

	var app = new Vue({
	  el: '#app',
	    data() {
	      return {
	        userName: null,
	        userEmail:null,
	        userMessage:null,
	        userSEmail:null,
	        dataUser: {
	          name: '',
	          email: '',
	          message: '',
	          emailS:''
	        },
	        showDismissibleAlert: false,
	        showDismissibleAlertS:false,
	        formValidation: false,
	        formSValidation:false
	      }
	    },

	  	computed: {
	      validation() {
	      	if(this.userName === null){
	      		return null;
	      	}else{
	      		return this.userName.length > 4 && this.userName.length < 13;
	      	}
	        
	      },
	      validationEmail(){
	      	if(this.userEmail === null){
	      		return null;
	      	}else{
	      		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userEmail);
	      	}
	      },
  	      validationMessage(){
	      	if(this.userMessage === null){
	      		return null;
	      	}else{
	      		return this.userMessage.length > 5;
	      	}
	      },
	      validationSEmail(){
	      	if(this.userSEmail === null){
	      		return null;
	      	}else{
	      		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userSEmail);
	      	}
	      },
	      btnState(){
	      	if(this.userMessage === null || this.userName === null || this.userEmail === null ){
	      		this.formValidation = false;
	      	}else{
		      	if((this.userName.length > 4 && this.userName.length < 13) && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userEmail)) && (this.userMessage.length > 5)){
		      		this.formValidation = true;
		      	}else{
		      		this.formValidation = false;
		      	}
	      	}

	      },
	      btnStateS(){
	      	if(this.userSEmail === null){
	      		this.formSValidation =  false;
	      	}else{
	      		if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userSEmail)){
	      			this.formSValidation =  true;
	      		}else{
	      			this.formSValidation =  false;
	      		}
	      	}
	      }
	    },

	    methods: {
	      onSubmit(evt) {
	        evt.preventDefault();
	        this.dataUser.name = this.userName;
	        this.dataUser.email = this.userEmail;
	        this.dataUser.message = this.userMessage;
	        this.dataUser.emailS = this.userSEmail;
	        console.log(this.dataUser)
	        this.userName = null;
	        this.userEmail = null;
	        this.userMessage = null;
	        this.userSEmail = null;
	      }
	    }

	})
}