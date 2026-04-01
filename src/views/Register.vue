<template>
    <div class="page mt-3">
        <h4>Đăng ký tài khoản</h4>
        <form @submit.prevent="handleRegister">
            <div class="form-group">
                <label>Tên đăng nhập</label>
                <input v-model="user.username" type="text" class="form-control" required />
            </div>
            <div class="form-group">
                <label>Email</label>
                <input v-model="user.email" type="email" class="form-control" required />
            </div>
            <div class="form-group">
                <label>Mật khẩu</label>
                <input v-model="user.password" type="password" class="form-control" required />
            </div>
            <button class="btn btn-success mt-2">Đăng ký</button>
        </form>
        <p class="mt-3 text-info">{{ message }}</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            user: { username: "", email: "", password: "" },
            message: ""
        };
    },
    methods: {
        async handleRegister() {
            try {
                await axios.post("http://localhost:3000/api/auth/register", this.user);
                this.message = "Đăng ký thành công! Đang chuyển hướng sang Đăng nhập...";
                setTimeout(() => {
                    this.$router.push({ name: "login" });
                }, 2000);
            } catch (error) {
                this.message = "Lỗi: " + (error.response?.data?.message || "Không thể đăng ký");
            }
        }
    }
};
</script>