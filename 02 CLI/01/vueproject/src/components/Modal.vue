<template>
    <div class="backdrop">
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <h1>{{defaultText}}</h1>
            <p>Lorem ipsum dolor sit amet con
                sectetur adipisicing elit. Pariatur expedita deleniti, at laboriosam doloremque rerum, asperiores, vero facilis distinctio amet saepe fuga nemo? Vel quae amet natus officiis ipsam dolore.</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['defaultText', 'theme']
}
</script>




<style scoped>
    .modal{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }

    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }

    h1{
        color: rgb(27, 109, 109);
    }

</style>