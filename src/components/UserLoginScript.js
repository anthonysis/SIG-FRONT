export default {
    name: 'UserLogin',
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        handleLogin() {
            // Aqui você pode adicionar a lógica de autenticação
            if (this.username && this.password) {
                alert(`Username: ${this.username}\nPassword: ${this.password}`);
                // Autenticação simulada
                // Você pode adicionar a lógica real de autenticação aqui
            } else {
                alert('Por favor, preencha ambos os campos.');
            }
        }
    }
};
