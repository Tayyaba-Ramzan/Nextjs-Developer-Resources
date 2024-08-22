const EmployeePage = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <h1>Employee ID: {params.id}</h1>
            <p>This is the content for the employee with ID {params.id}.</p>
        </div>
    );
}

export default EmployeePage;

