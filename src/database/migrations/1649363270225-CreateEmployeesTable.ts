import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEmployeesTable1649363270225 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'employee',
            columns: [
                {
                   name: 'id',
                   type: 'varchar',
                   isPrimary: true,
                   generationStrategy: 'uuid',
                },
                {
                    name: 'user_id',
                    type: 'varchar',
                },
                {
                    name: 'full_name',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                },
                {
                    name: 'email_corp',
                    type: 'varchar',
                },
                {
                    name: 'admission_date',
                    type: 'timestamp',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    isNullable: true
                }
            ],
            foreignKeys: [
                {
                    name: 'FKUserEmployee',
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    columnNames: ['user_id'],
                }
            ]
        }))
        }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable('employee')
        }

}
