<template>
    <div class="page mt-3">
        <h4>Đăng nhập</h4>
        <form @submit.prevent="handleLogin">
            <div class="form-group">
                <label>Tên đăng nhập</label>
                <input v-model="user.username" type="text" class="form-control" required />
            </div>
            <div class="form-group">
                <label>Mật khẩu</label>
                <input v-model="user.password" type="password" class="form-control" required />
            </div>
            <button class="btn btn-primary mt-2">Đăng nhập</button>
        </form>
        <p class="mt-3 text-danger">{{ message }}</p>
    </div>
</template>

<script>
import axios from "axios";
// axios.post("/api/auth/login", this.user);
export default {
    data() {
        return {
            user: { username: "", password: "" },
            message: ""
        };
    },
    methods: {
        async handleLogin() {
            try {
                const response = await axios.post(
                    "http://localhost:3000/api/auth/login",
                    this.user
                );
                console.log(response.data);
                // Lưu đúng token từ backend trả về
                if (response.data.accessToken) {
                    localStorage.setItem("userToken", response.data.accessToken);
                    this.$router.push({ name: "contactbook" });
                }
            } catch (error) {
                console.error("LOGIN ERROR:", error);
                console.error("Lỗi đăng nhập:", error.response || error);
                this.message = error.response?.data?.message ||
                    "Tên đăng nhập hoặc mật khẩu không đúng!";
            }
        }
    }
};
</script>