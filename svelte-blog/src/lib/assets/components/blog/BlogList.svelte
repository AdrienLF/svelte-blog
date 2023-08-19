<script>
    export let data

     //   content,
    //   title,
    //   date,
    //   slug,
    //   preview,
    //   previeImage
    //   quote
    console.log("Blog list")
    console.log(data)
</script>

<div class="blogList">
    <div class="title">
        Blog posts
    </div>

    <div class="postLists">
        {#each data.posts as post}
        <a href={post.path}>
        <ul>
            <li class="post">
                <div class="post-image">
                    <img src="{post.meta.previewImage}" alt={post.meta.title} />
                </div>
                <div class="post-content">
                    <div class="post-title">{post.meta.title}</div>
                    <div class="post-date">{post.meta.date}</div>
                    <div class="post-preview">“{post.meta.quote}”</div>
                </div>
            </li>
        </ul>
        </a>
        {/each}
    </div>
</div>


<style>
    .blogList {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 20px; /* Adjust as needed */
        max-width:300px;
        min-width:300px;
    }
    @media (max-width: 600px)  { 
        .blogList {display:none;}
        
    }

    .title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
    }

   

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .post {
        background-color: var(--base-bg);
        border-radius: 8px;
        margin-bottom: 10px;
        padding: 10px;
        
        display: flex;
        align-items: center;
    }

    .post-image {
        width: 80px;
        height: 80%;
        margin-right: 10px;
        border-radius: 8px;
        overflow: hidden;
    }

    .post-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .post-content {
        flex: 1;
    }

    .post-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
    }

    .post-date {
        font-size: 14px;
        color: #666;
    }

    .post-preview {
        font-family: 'CormorantGaramond';
        font-style:italic;
        font-weight:400;

    }
</style>
