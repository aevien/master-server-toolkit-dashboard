<script setup lang="ts">
import { Modal } from 'bootstrap';
import { onMounted, ref, onBeforeUnmount } from 'vue';
import { ModalType } from '../core/constants';

const message = ref('')
const messateType = ref<ModalType>(ModalType.NORMAL)
const modalRef = ref(null);
let modalInstance: Modal | null = null;

onMounted(() => {
    if (modalRef.value) {
        modalInstance = new Modal(modalRef.value);
    }
});

onBeforeUnmount(() => {
    if (modalInstance) {
        modalInstance.dispose();
    }
});

const showModal = (text: string, type: ModalType): void => {
    message.value = text
    messateType.value = type
    if (modalInstance) {
        modalInstance.show();
    }
}

const showOkModal = (text: string, type: ModalType = ModalType.NORMAL): void => {
    showModal(text, type)
};

const hideModal = (): void => {
    if (modalInstance) {
        modalInstance.hide();
    }
};

defineExpose({
    showOkModal,
    hideModal
})
</script>

<template>
    <div class="modal fade" ref="modalRef" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Alert</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <div class="alert" :class="{
                        'alert-primary': messateType === ModalType.NORMAL,
                        'alert-warning': messateType === ModalType.WARNING,
                        'alert-danger': messateType === ModalType.ERROR
                    }" role="alert">
                        {{ message }}
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
                    <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                </div>
            </div>
        </div>
    </div>
</template>