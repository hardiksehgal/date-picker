# Custom Date Picker

This is a custom date picker for Angular Applications.

## Installation
Install the package from npm with the help of following command:

```Bash
npm install date-picker-custom --save
```

Import **DatePickerModule** in *app.module.ts* 

```javascript
import {{ DatePickerModule }} from 'date-picker-custom';
```

Add **DatePickerModule** to your module imports in *app.module.ts*

```javascript
@NgModule({
  ...
  imports: [
    ...
    DatePickerModule,
    ...
  ]
  ...
})
```
## Options
All the available input options are listed below: 

#### Input Attributes:
| Name      | Type    | Values                                 |Default | Description                                                  |
|-----------|---------|----------------------------------------|--------|--------------------------------------------------------------|
| theme     | string  | 'red' \| 'yellow' \| 'blue' \| 'green' | ""     | This will change the current color scheme of the date picker |
| showDay   | boolean | true \| false                          | true   | Set to false if you don't want the date in the date picker   |
| showMonth | boolean | true \| false                          | true   | Set to false if you don't want the month in the date picker  |
| showYear  | boolean | true \| false                          | true   | Set to false if you don't want the year in the date picker   |

All the available output attributes are listed below: 

### Output Attributes: 
| Name       | Output Type | Description                                                  |
|------------|-------------|--------------------------------------------------------------|
| date       | Date        | Emits the full selected date. If any of the *__showDate__*, *__showMonth__* or *__showYear__* input is set to false, then **undefined** is returned |
| day        | number      | Emits the selected day of the month. If *__showDate__* input is set to false, **undefined** is returned |
| month      | number      | Emits the selected month number. The returned result is zero indexed, i.e, *January is 0, February is 1,* and so on. If *__showMonth__* input is set to false, **undefined** is returned |
| month_name | string      | Emits the selected month name. If *__showMonth__* input is set to false, **undefined** is returned |
| year       | number      | Emits the selected year in YYYY format. If *__showYear__* input is set to false, **undefined** is returned|

## Usage
To use the date picker in your component, you have to add the **date-picker** HTML tag in your code like below:

```html
<date-picker
    theme='red'
    [showDay]='false'
    [showMonth]='true'
    [showYear]='true'
    (date)='getDate($event)'
    (day)='getDay($event)'
    (month)='getMonth($event)'
    (month_name)='getMonthName($event)'
    (year)='getYear($event)'> 
</date-picker>
```

In your **component.ts** file: 

```javascript
getDate(date: Date): void {
    ...
}

getDay(day: number): void {
    ...
}

getMonth(month: number): void {
    ...
}
  
getMonthName(monthName: string): void {
    ...
}

getYear(year: number): void {
    ...
}
```

