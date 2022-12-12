<script>
    import { store } from '../stores/editor'

    let value = $store.text.toString()

    $store.text.observe(() => value = $store.text.toString())
    const insertText = (evt) => {
      const { target } = evt;
      $store.text.insert(target.selectionStart, evt.data)

      return evt.data === ' ' ? 0 : 1;
    }
    const deleteContentBackward = (evt) => {
      const { target } = evt;
      $store.text.delete(target.selectionStart, 1)

      return 0;
    }
    const evtMap = {
      insertText,
      deleteContentBackward,
    }

    function preserveCursor(fn) {
      return function(e) {
        const start = e.target.selectionStart;
        const end = e.target.selectionEnd;

        const offset = fn(e);

        requestAnimationFrame(() => {
          e.target.selectionStart = start + offset;
          e.target.selectionEnd = end + offset;
        });
      }
    }

    function updateText(evt) {
      console.log(evt);
      console.log(`${evt.target.selectionStart} - ${evt.target.selectionEnd}`)

      const f = evtMap[evt.inputType];
      if (!f) {
        return
      }

      const offset = f(evt)
      console.log(`Content: ${$store.text.toString()}`)
      value = $store.text.toString()

      return offset;
    }
</script>

<div class="text-editor">
    <h1>Text Editor</h1>
    <textarea on:input={preserveCursor(updateText)} bind:value></textarea>
</div>

<style>
    .text-editor {
        display: flex;
        flex-direction: column;
    }
</style>
