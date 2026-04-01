<template>
    <div class="page">
        <h4>Thêm mới Liên hệ</h4>
        <ContactForm :contact="{}" @submit:contact="saveContact" />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
import axios from "axios";

export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            message: "",
        };
    },
    methods: {
        async saveContact(data) {
            try {
                // Gọi API tạo mới từ Service
                const newData = {
                    name: data.fullname, // map lại
                    email: data.email,
                    address: data.address,
                    phone: data.phone,
                };
                await ContactService.create(newData);
                this.message = "Liên hệ được tạo mới thành công.";

                // Sau 2 giây tự động quay về trang danh sách
                setTimeout(() => {
                    this.$router.push({ name: "contactbook" });
                }, 2000);
            } catch (error) {
                console.log(error);
                this.message = "Đã có lỗi xảy ra khi thêm liên hệ.";
            }
        },
    },
};
</script>

<style scoped>
.page {
    max-width: 400px;
    margin: auto;
}
</style>