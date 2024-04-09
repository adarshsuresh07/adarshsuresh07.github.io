export function ColorPicker() {
    return (
        <div class="customColorInput">
            <label for="colorCodePreview" className="visually-hidden">Color's code</label>
            <input type="text" id="colorCodePreview" name="themeIconLightBg" className="customColorInput__text-input jsColorValue" value="#FF7B00" />

            <label for="colorCodeSelection" className="visually-hidden">Color Selection</label>
            <input type="color" id="colorCodeSelection" className="customColorInput__select-input" value="#FF7B00" />
        </div>
    )
}