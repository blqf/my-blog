<template>
  <form
    ref="container"
    class="form-container"
    @submit.prevent="handleSubmit({ nickname, content })"
  >
    <div class="form-item">
      <div class="input-area1">
        <input
          type="text"
          placeholder="用户昵称"
          class="inp-nickname"
          maxlength="10"
          v-model="nickname"
        />
        <span class="tip">{{ nickname.length }}/10</span>
      </div>
      <div class="err" :class="{ active: nicknameErr }">请填写昵称</div>
    </div>
    <div class="form-item">
      <div class="input-area2">
        <textarea
          placeholder="输入内容"
          class="inp-content"
          maxlength="3000"
          v-model="content"
        ></textarea>
        <span class="tip">{{ content.length }}/3000</span>
      </div>
      <div class="err" :class="{ active: contentErr }">请填写内容</div>
    </div>
    <button :disabled="isSubmiting" class="submit-btn">
      {{ isSubmiting ? "提交中..." : "提交" }}
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nickname: "",
      content: "",
      nicknameErr: false,
      contentErr: false,
      isSubmiting: false,
    };
  },
  methods: {
    handleSubmit(formData) {
      this.nicknameErr = !this.nickname;
      this.contentErr = !this.content;
      if (this.nicknameErr || this.contentErr) return;
      this.isSubmiting = true;
      this.$emit("submit", formData, (msg, type) => {
        this.isSubmiting = false;
            this.nickname = "";
            this.content = "";
        this.$showMessage({
          content: msg,
          type: type,
          duration: 1000,
          container: this.$refs.container
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.form-container {
  color: @gray;
  .form-item {
    .input-area1 {
      position: relative;
      width: 50%;
      padding: 10px 0 5px;
      .inp-nickname {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: 1px dotted @gray;
        outline: none;
        text-indent: 1em;
        &:focus {
          border-color: @primary;
        }
      }
      .tip {
        font-size: 12px;
        position: absolute;
        right: 2px;
        bottom: 10px;
        color: @gray;
      }
    }
    .input-area2 {
      width: 100%;
      position: relative;
      padding: 10px 0 5px;
      .inp-content {
        width: 100%;
        height: 120px;
        padding: 15px 15px;
        border: 1px dotted @gray;
        border-radius: 5px;
        outline: none;
        resize: none;
        font-size: 14px;
        box-sizing: border-box;
        &:focus {
          border-color: @primary;
        }
      }
      .tip {
        position: absolute;
        right: 10px;
        bottom: 15px;
        font-size: 12px;
        color: @gray;
      }
    }
    .err {
      color: @danger;
      font-size: 14px;
      opacity: 0;
      &.active {
        opacity: 1;
      }
    }
  }
  .submit-btn {
    width: 100px;
    height: 30px;
    background-color: darken(@primary, 5%);
    color: #fff;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
      background-color: darken(@primary, 15%);
    }
    &:disabled {
      background-color: lighten(@primary, 5%);
      cursor: not-allowed;
    }
  }
}
</style>