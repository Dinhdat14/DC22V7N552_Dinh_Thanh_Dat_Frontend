<script>
export default {
    props: {
        modelValue: { type: String, default: "" },
        /*Với việc định nghĩa thuộc tính modelValue, liên kết value của input với modelValue và phát sinh sự kiện
update:modelValue khi value của input thay đổi cho phép ta sử dụng v-model tạo liên kết hai chiều với
InputSearch , ví dụ: <InputSearch v-model="..." />*/
    },
    emits: ["submit", "update:modelValue"],
    methods: {
        updateModelValue(e) {
            this.$emit("update:modelValue", e.target.value);
        },
        submit() {
            this.$emit("submit");
        },
    },
};
</script>
<template>
    <div class="input-group">
        <input type="text" class="form-control" placeholder="Nhập thông tin cần tìm" :value="modelValue"
            @input="updateModelValue" @keyup.enter="submit" />
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="submit">
                <i class="fas fa-search"></i> Tìm kiếm
            </button>
        </div>
    </div>
</template>