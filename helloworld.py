import webapp2
from string import *

form = """
<form method="post">
    When is your birthday?
    <br>
    <label> Month
        <input type="text" name="month" value="%(month)s">
    </label>
    <label> Day
        <input type="text" name="day" value="%(day)s">
    </label>
    <label> Year
        <input type="text" name="year" value="%(year)s" >
    </label>
    <div style="color: red">%(error)s</div>
    <br>
    <br>
    <input type="submit">
</form>"""

months = ['January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December']


class MainPage(webapp2.RequestHandler):
    def valid_month(self, month):
        if month:
            cap_month = month.capitalize()
            if cap_month in months:
                return cap_month

    def valid_day(self, day):
        if day and day.isdigit():
            day = int(day)
            if 0 < day <= 31:
                return day

    def valid_year(self, year):
        if year and year.isdigit():
            year = int(year)
            if 1900 < year < 2020:
                return year

    def write_form(self, error="", month="", day="", year=""):
        self.response.out.write(form %{"error": error, "month": month, "day": day, "year": year})

    def get(self):
        self.write_form()

    def post(self):
        user_month = self.request.get('month')
        user_day = self.request.get('day')
        user_year = self.request.get('year')

        v_month = self.valid_month(user_month)
        v_day = self.valid_day(user_day)
        v_year = self.valid_year(user_year)

        if not( v_month and v_day and v_year ):
            self.write_form("Invalid date", user_month, user_day, user_year)
        else:
            self.redirect("/thanks")

class ThanksHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write("Valid entry")

app = webapp2.WSGIApplication([
    ('/', MainPage), ('/thanks', ThanksHandler)
], debug=True)


