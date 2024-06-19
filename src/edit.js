import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { showDummyText, dummyText } = attributes;
	const text = __("Amolina Wp Block Dummy", "amolina-wp-block-navbar");
	let displayText;

	if (showDummyText && dummyText) {
		displayText = dummyText + " – " + text;
	} else {
		displayText = text;
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "amolina-wp-block-navbar")}>
					<ToggleControl
						checked={!!showDummyText}
						label={__("Ver ejemplo de texto", "amolina-wp-block-navbar")}
						onChange={() =>
							setAttributes({
								showDummyText: !showDummyText,
							})
						}
					/>
					{showDummyText && (
						<TextControl
							label={__("Ejemplo de texto", "amolina-wp-block-navbar")}
							value={dummyText || ""}
							onChange={(value) => setAttributes({ dummyText: value })}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			<p {...useBlockProps()}>{displayText}</p>
		</>
	);
}
