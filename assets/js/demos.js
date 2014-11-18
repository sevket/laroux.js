// ajax - Making a GET request
$l.ready(function() {
    var button = $l('#button-ajax-get-request');
    var text = $l('#text-ajax-get-request');

    $l.dom.setEvent(
        button,
        'click',
        function() {
            $l.ajax.getJson(
                'test.json',
                null,
                function(response) {
                    $l.dom.replace(text, response.testResponse);
                }
            );

            return false;
        }
    );
});

// anim - Creating a variable animation
$l.ready(function() {
    var button = $l('#button-anim-var-animate');

    $l.dom.setEvent(
        button,
        'click',
        function() {
            $l.anim.set({
                object:   document.body,
                property: 'scrollTop',
                from:     null,
                to:       0,
                time:     800,
                unit:     '',
                reset:    false
            });

            return false;
        }
    );
});

// anim - Creating a CSS animation
$l.ready(function() {
    var button = $l('#button-anim-css-animate');
    var box = $l('#div-anim-css-animate');

    $l.dom.setEvent(
        button,
        'click',
        function() {
            $l.anim.setCss({
                object:   box,
                property: 'top',
                from:     0, // current value
                to:       50,
                time:     1200,
                unit:     'px',
                reset:    false
            });

            return false;
        }
    );
});

// css - Transitions
$l.ready(function() {
    var button = $l('#button-css-transition');
    var box = $l('#div-css-transition');

    $l.css.setTransition(
        box,
        {
            'background-color': '2s',
            'width': '1s ease'
        }
    );

    $l.dom.setEvent(
        button,
        'click',
        function() {
            $l.css.toggleClass(
                box,
                'box-silver'
            );

            return false;
        }
    );
});

// date - Dates
$l.ready(function() {
    var button = $l('#button-date-dates');
    var text = $l('#text-date-dates');

    $l.dom.setEvent(
        button,
        'click',
        function() {
            var now = new Date();
            var yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            $l.dom.clear(text);

            $l.dom.append(text, '<div><strong>From yesterday to today:</strong></div>');
            $l.dom.append(text, $l.date.parseEpoch(now.getTime() - yesterday.getTime()));

            $l.dom.append(text, '<div><strong>Short Date:</strong></div>');
            $l.dom.append(text, $l.date.getDateString(now) + '<br />');

            $l.dom.append(text, '<div><strong>Short Date + month names:</strong></div>');
            $l.dom.append(text, $l.date.getDateString(now, true) + '<br />');

            $l.dom.append(text, '<div><strong>Long Date:</strong></div>');
            $l.dom.append(text, $l.date.getLongDateString(now) + '<br />');

            $l.dom.append(text, '<div><strong>Long Date + month names:</strong></div>');
            $l.dom.append(text, $l.date.getLongDateString(now, true) + '<br />');

            $l.dom.append(text, '<div><strong>Long Date + month names + time:</strong></div>');
            $l.dom.append(text, $l.date.getLongDateString(now, true, true) + '<br />');

            return false;
        }
    );
});

// dom - Clone
$l.ready(function() {
    var button = $l('#button-dom-clone');
    var target = $l('#target-dom-clone');

    $l.dom.setEvent(
        button,
        'click',
        function() {
            $l.dom.clone(target.firstElementChild, $l.dom.cloneAppend);

            return false;
        }
    );
});

// events - Setting Events
$l.ready(function() {
    var checkbox = $l('#checkbox-events-setting-events');
    var text = $l('#text-events-setting-events');

    $l.dom.setEvent(
        checkbox,
        'change',
        function(ev, element) {
            if (element.checked) {
                $l.dom.replace(text, 'checked');
            } else {
                $l.dom.replace(text, 'unchecked');
            }

            return false;
        }
    );
});

// forms - Serializing
$l.ready(function() {
    var button = $l('#button-forms-serializing');
    var target = $l('#target-forms-serializing');
    var text = $l('#text-forms-serializing');

    $l.dom.setEvent(
        button,
        'click',
        function() {
            var serialized = $l.forms.serialize(target);
            $l.dom.replace(text, JSON.stringify(serialized));

            return false;
        }
    );
});

// forms - Toggle Form Editing
$l.ready(function() {
    var button = $l('#button-forms-toggle');
    var target = $l('#target-forms-toggle');

    $l.dom.setEvent(
        button,
        'click',
        function() {
            $l.forms.toggleFormEditing($l('#target-forms-toggle'));

            return false;
        }
    );
});

// helpers - Helpers
$l.ready(function() {
    var button = $l('#button-helpers-helpers');
    var text = $l('#text-helpers-helpers');

    $l.dom.setEvent(
        button,
        'click',
        function() {
            $l.dom.clear(text);

            $l.dom.append(text, '<div><strong>Unique Id Generator:</strong></div>');
            $l.dom.append(text, $l.helpers.getUniqueId() + '<br />');
            $l.dom.append(text, $l.helpers.getUniqueId() + '<br />');

            $l.dom.append(text, '<div><strong>Query String Generation:</strong></div>');
            $l.dom.append(text, $l.helpers.buildQueryString({ pageId: 5, showAll: 'yes' }) + '<br />');

            $l.dom.append(text, '<div><strong>Transform string into camel case:</strong></div>');
            $l.dom.append(text, $l.helpers.camelCase('text-align') + '<br />');

            $l.dom.append(text, '<div><strong>Transform string back from camel case:</strong></div>');
            $l.dom.append(text, $l.helpers.antiCamelCase('textAlign') + '<br />');

            $l.dom.append(text, '<div><strong>Encoding special characters:</strong></div>');
            $l.dom.append(text, $l.helpers.quoteAttr('<br clear="all" />') + '<br />');

            $l.dom.append(text, '<div><strong>Generating random value:</strong></div>');
            $l.dom.append(text, $l.helpers.random(1, 15) + '<br />');
            $l.dom.append(text, $l.helpers.random(1, 15) + '<br />');

            $l.dom.append(text, '<div><strong>Getting values from a single column:</strong></div>');
            var arr = [{id: 1, count: 5}, {id: 2, count: 12}];
            $l.dom.append(text, JSON.stringify($l.helpers.column(arr, 'count')) + '<br />');

            $l.dom.append(text, '<div><strong>Shuffling values:</strong></div>');
            $l.dom.append(text, $l.helpers.shuffle([1, 2, 3, 4, 5]) + '<br />');

            $l.dom.append(text, '<div><strong>Merging two arrays:</strong></div>');
            $l.dom.append(text, JSON.stringify($l.helpers.merge({id: 1}, {name: 'eser', count: 5})) + '<br />');

            $l.dom.append(text, '<div><strong>Getting count of elements:</strong></div>');
            $l.dom.append(text, $l.helpers.getLength({id: 1, name: 'eser', count: 5}) + '<br />');

            $l.dom.append(text, '<div><strong>Getting elements with dot notation:</strong></div>');
            $l.dom.append(text, $l.helpers.getElement({id: 1, child: { a: 1, b: 2 }}, 'child.a') + '<br />');

            $l.dom.append(text, '<div><strong>Getting keys for dot notation:</strong></div>');
            $l.dom.append(text, JSON.stringify($l.helpers.getKeysRecursive({id: 1, child: { a: 1, b: 2 }})) + '<br />');

            return false;
        }
    );
});

