<script>
export default {
    name: 'ErrorNotFound',

    data() {
        return {
            errorMessage: {
                401: "Unauthorized",
                404: "Nothing found",
                500: "Internal server error",
            }
        }
    },
}
</script>

<template>
    <div class="error-container">
        <div class="error-title">
            <h1>Error {{ $route.params.code }}</h1>
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.error-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .error-title {
        h1 {
            font-size: 2rem;
            margin: 1rem;
        }

        p {
            font-size: 1rem;
            margin-bottom: 1rem;
        }
    }
}
</style>