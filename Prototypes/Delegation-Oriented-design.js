var AuthController = {
    authenticate(){
        ServiceWorkerRegistration.authenticate(
            [this.username,this.password],
            this.handleResponse.bind(this)
        );
    },

        handleResponse(resp){
            if(!resp.ok) this.displayerError(resp.msg);
        }

    }

    var LoginFormController = Object.assign(Object.create(AuthController),{
        onSumbit(){
            this.username = this.$username.val();
            this.password = this.$password.val();
            this.authenticate();
        },
        displayerError(msg){
            alert(msg);
        }
    })