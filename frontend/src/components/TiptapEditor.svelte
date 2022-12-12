<script>
  import { onMount, onDestroy } from 'svelte'
  import { Editor } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'
  import Collaboration from '@tiptap/extension-collaboration'
  import {ydoc} from "../stores/tiptap";

  let element
  let editor

  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [
        StarterKit,
        Collaboration.configure({
          document: ydoc,
        }),
      ],
      onTransaction: () => {
        // force re-render so `editor.isActive` works as expected
        editor = editor
      },
    })
  })

  onDestroy(() => {
    if (editor) {
      editor.destroy()
    }
  })
</script>

<h1>Text</h1>
{#if editor}
  <button
      on:click={() => editor.chain().focus().toggleHeading({ level: 1}).run()}
      class:active={editor.isActive('heading', { level: 1 })}
  >
    H1
  </button>
  <button
      on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      class:active={editor.isActive('heading', { level: 2 })}
  >
    H2
  </button>
  <button on:click={() => editor.chain().focus().setParagraph().run()} class:active={editor.isActive('paragraph')}>
    P
  </button>
{/if}

<div class="editor" bind:this={element}></div>

<style>
    button.active {
        background: black;
        color: white;
    }
    .editor {
        padding: 0.25em 0;
        border: 1px solid #cccccc;
    }
</style>
