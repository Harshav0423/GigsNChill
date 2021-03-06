# Generated by Django 4.0.2 on 2022-03-24 04:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0003_host'),
        ('event', '0006_event_zipcode_location_state'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bookings',
            fields=[
                ('BookingId', models.AutoField(primary_key=True, serialize=False)),
                ('NoOfSeats', models.IntegerField(default=1)),
                ('EventID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='event.event')),
                ('UserID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='register.user')),
            ],
        ),
    ]
