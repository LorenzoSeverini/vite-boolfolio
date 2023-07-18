<script>
export default {
    name: 'HomePage',
    props: {
    msg: String,
    },

    data() {
        return {
            msg: 'Home Page',
        }; 
    },
}
</script>

<template>
    <div class="home-page-container">
        <!-- home page main content  -->
        <h1>{{ msg }}</h1>
        <!-- thumbnail container -->
        <div class="thumbnail-container">
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div> <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
            <div class="thumbnail">
                <img src="https://picsum.photos/200/300" alt="thumbnail" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.home-page-container {
    margin: 0 auto;
    width: 72.5rem;
    max-width: 100%;
    padding: 1rem;

    .thumbnail-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;
        margin-top: 1rem;

        .thumbnail {
            width: calc(100% / 6 - 1rem);
            height: calc(100% / 6);
            border-radius: 0.5rem;
            overflow: hidden;
            box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
            display: flex;

            &:hover {
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                transform: scale(1.05)
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>