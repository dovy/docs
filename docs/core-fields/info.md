# Info

The Info field comes in several varieties to display information as normal, info warning and success formats.  Choose between the WordPress 3.8 styles, or the non-notice styles.

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|<div style="width:70px;">Default</div>|Description|
|--- |--- |--- |--- |
|type|string|`info`|Value identifying the field type.|
|style|string|`normal`|Sets the mode of the info box.  Accepts:  `normal` `info` `warning` `success` `critical` `custom`|
|notice|bool|`true`|Set the styling to the non-notice styles, instead of the default WordPress 3.8 notice styles.|
|color|string||Color that becomes the left border if style is set to custom. Will not work with a non-notice styled field.|
|icon|string||Name of an Elusive Icon font to use in the info box.|
|indent|bool|`false`|If set, left field indent will be applied.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

::: warning Tip
When using the Info field with `required`, the field cannot be hidden by default.  It’s best only to use the `required` argument with this field when the fold is shown by default.
:::

## Example Declaration
<script>
import builder from './info.json';
export default {
    data () {
        return {
            builder: builder,
            defaults: {}
        };
    }
}
</script>
<builder :builder_json="builder" :builder_defaults="defaults" />

## Example Declaration

#### Normal Style
<span style="display:block;text-align:center">![](./img/info_normal.png)</span>

```php
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
    'id'   => 'info_normal',
    'type' => 'info',
    'desc' => __('This is the info field, if you want to break sections up.', 'redux-framework-demo')
) );
```

#### Warning Style

<span style="display:block;text-align:center">![](./img/info_warning.png)</span>

```php
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
    'id'    => 'info_warning',
    'type'  => 'info',
    'title' => __('Danger, Will Robinson!', 'redux-framework-demo'),
    'style' => 'warning',
    'desc'  => __('This is an info field with the warning style applied and a header.', 'redux-framework-demo')
) );
```

#### Success Style

<span style="display:block;text-align:center">![](./img/info_success.png)</span>

```php
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
    'id'    => 'info_success',
    'type'  => 'info',
    'style' => 'success',
    'title' => __('Success!', 'redux-framework-demo'),
    'icon'  => 'el-icon-info-sign',
    'desc'  => __( 'This is an info field with the success style applied, a header and an icon.', 'redux-framework-demo')
) );
```

#### Critical Style
<span style="display:block;text-align:center">![](./img/info_critical.png)</span>

```php
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
    'id' => 'info_critical',
    'type' => 'info',
    'style' => 'critical',
    'icon' => 'el-icon-info-sign',
    'title' => __('This is a title.', 'redux-framework-demo'),
    'desc' => __('This is an info field with the critical style applied, a header and an icon.', 'redux-framework-demo')
) );
```

