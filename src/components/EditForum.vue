<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <h2>Edit Comment</h2>
      <form @submit.prevent="save">
        <div class="form-container">
          <label class="form-label" for="email">Email:</label>
          <input
            class="email-input"
            id="email"
            v-model="email"
            type="email"
            required
          />
        </div>
        <div class="form-container">
          <label class="form-label" for="body">Body:</label>
          <textarea
            class="textarea-input"
            id="body"
            v-model="body"
            required
          ></textarea>
        </div>
        <div class="modal-actions">
          <button type="submit">Save</button>
          <button type="button" @click="close">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

// Define props and emits
const props = defineProps({
  id: Number,
  email: String,
  body: String,
});
const emits = defineEmits(["save", "close"]);

// Initialize reactive variable
const email = ref(props.email);
const body = ref(props.body);

// Function to handle saving the edited comment
const save = () => {
  emits("save", props.id, email.value, body.value);
};

// Function to handle closing the modal
const close = () => {
  emits("close");
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  display: flex;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.form-label {
  color: #31473a;
  font-size: larger;
  font-weight: 500;
  padding-bottom: 10px;
}

.form-container {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}

.email-input {
  padding: 20px;
  border-radius: 5px;
  border-color: #31473a;
  font-size: medium;
}

.textarea-input {
  padding: 20px;
  border-radius: 5px;
  border-color: #31473a;
  font-size: medium;
  font-weight: 500;
}
</style>
